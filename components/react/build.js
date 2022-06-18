/* eslint-disable */
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const coreDir = path.dirname(require.resolve('@iconify/core/package.json'));

// List of commands to run
const commands = [];

// Build process
const compile = {
	// Compile @iconify/core
	core: false,
	// Compile TypeScript src -> lib
	lib: true,
	// Fix types for icon components
	cleanup: true,
	// Generate bundle from compiled files lib -> dist
	dist: true,
	// Generate TypeScript definitions in dist
	api: true,
};

process.argv.slice(2).forEach((cmd) => {
	if (cmd.slice(0, 2) !== '--') {
		return;
	}
	const parts = cmd.slice(2).split('-');
	if (parts.length === 2) {
		// Parse 2 part commands like --with-lib
		const key = parts.pop();
		if (compile[key] === void 0) {
			return;
		}
		switch (parts.shift()) {
			case 'with':
				// enable module
				compile[key] = true;
				break;

			case 'without':
				// disable module
				compile[key] = false;
				break;

			case 'only':
				// disable other modules
				Object.keys(compile).forEach((key2) => {
					compile[key2] = key2 === key;
				});
				break;
		}
	}
});

// Check if required modules in same monorepo are available
const fileExists = (file) => {
	try {
		fs.statSync(file);
	} catch (e) {
		return false;
	}
	return true;
};

if (compile.dist && !fileExists('./lib/icon.js')) {
	compile.lib = true;
}

if (compile.api && !fileExists('./lib/icon.d.ts')) {
	compile.lib = true;
}

if (compile.lib && !fileExists(coreDir + '/lib/cache.mjs')) {
	compile.core = true;
}

// Compile core before compiling this package
if (compile.core) {
	commands.push({
		cmd: 'npm',
		args: ['run', 'build'],
		cwd: coreDir,
	});
}

// Compile other packages
Object.keys(compile).forEach((key) => {
	if (key !== 'core' && compile[key]) {
		commands.push({
			cmd: 'npm',
			args: ['run', 'build:' + key],
		});
	}
});

/**
 * Run next command
 */
const next = () => {
	const item = commands.shift();
	if (item === void 0) {
		process.exit(0);
	}

	if (item.cwd === void 0) {
		item.cwd = __dirname;
	}

	const result = child_process.spawnSync(item.cmd, item.args, {
		cwd: item.cwd,
		stdio: 'inherit',
	});

	if (result.status === 0) {
		process.nextTick(next);
	} else {
		process.exit(result.status);
	}
};
next();