import { trimSVG } from '../lib/svg/trim';

describe('Trim SVG', () => {
	test('Simple whitespace', () => {
		expect(
			trimSVG(
				'<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50"/></svg>\n'
			)
		).toBe(
			'<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50"/></svg>'
		);

		expect(
			trimSVG(
				'\n<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50"/></svg>\n'
			)
		).toBe(
			'<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50"/></svg>'
		);
	});

	test('Whitespace inside icon', () => {
		expect(
			trimSVG(
				`
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50"/>
</svg>
`
			)
		).toBe(
			'<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50"/></svg>'
		);
	});

	test('Path with multiple lines', () => {
		expect(
			trimSVG(`
        <svg version="1.1" id="Layer_9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
<g>
       <circle style="fill:#D68F30;" cx="64" cy="66.58" r="57.36"/>
       <g>
               <g>
                       <path style="fill:#BC6F00;" d="M10.54,81.48v5.86c0.6,1.55,1.27,3.08,2,4.56V81.48H10.54z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M17.08,92.51v7.04c0.8,1.13,1.63,2.24,2.5,3.31V92.51H17.08z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M25.74,101.71v7.59c0.97,0.87,1.97,1.7,3,2.5v-10.09H25.74z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M36.4,108.7v8.16c0.98,0.54,1.98,1.05,3,1.54v-9.7H36.4z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M48.49,113.15v8.64c0.99,0.28,1.99,0.53,3,0.76v-9.4H48.49z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M62.64,114.69v9.21c0.45,0.01,0.9,0.03,1.36,0.03c0.55,0,1.1-0.03,1.64-0.04v-9.2H62.64z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M76.79,113.08v9.4c1.01-0.23,2.01-0.49,3-0.77v-8.63H76.79z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M88.85,108.57v9.71c1.02-0.49,2.02-1.02,3-1.57v-8.14H88.85z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M99.48,101.52v10.1c1.03-0.81,2.03-1.64,3-2.52v-7.58H99.48z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M111.09,92.29h-2.5v10.35c0.87-1.08,1.71-2.19,2.5-3.33V92.29z"/>
               </g>
               <g>
                       <path style="fill:#BC6F00;" d="M117.59,81.22h-2v10.44c0.73-1.51,1.4-3.06,2-4.63V81.22z"/>
               </g>
       </g>
       <circle style="fill:#FFF176;" cx="64" cy="61.42" r="57.36"/>
       <circle style="fill:#F2BC1A;" cx="64" cy="61.42" r="52.25"/>
       <g>
               <path style="fill:#E08F00;" d="M11.65,63.42c-0.37-6.88,0.82-13.86,3.22-20.4c2.5-6.52,6.33-12.55,11.16-17.67
                       C35.73,15.09,49.81,9.14,64,9.07c14.19,0.08,28.28,6.02,37.96,16.29c4.84,5.11,8.66,11.15,11.16,17.66
                       c2.41,6.55,3.6,13.52,3.22,20.4h-0.2c-0.02-6.85-1.38-13.68-4-20c-2.61-6.32-6.48-12.12-11.29-16.97
                       c-4.82-4.85-10.59-8.75-16.9-11.38c-6.3-2.64-13.13-4-19.96-4c-6.83,0-13.66,1.36-19.96,4c-6.31,2.63-12.08,6.53-16.9,11.38
                       c-4.82,4.85-8.68,10.65-11.29,16.97c-2.62,6.32-3.98,13.15-4,20H11.65z"/>
       </g>
       <path style="fill:#FFF176;" d="M64,4.07c-31.68,0-57.36,25.68-57.36,57.36c0,31.68,25.68,57.36,57.36,57.36
               s57.36-25.68,57.36-57.36C121.36,29.75,95.68,4.07,64,4.07z M64,113.68c-28.86,0-52.25-23.39-52.25-52.25
               C11.75,32.56,35.14,9.17,64,9.17s52.25,23.39,52.25,52.25C116.25,90.28,92.86,113.68,64,113.68z"/>
       <g>
               <g>
                       <polygon style="fill:#D38200;" points="37.99,21.35 39.26,25.28 43.4,23.7 43.4,25.28 40.05,27.71 41.33,30.05 41.33,31.64
                               37.99,29.21 34.64,31.64 34.64,30.05 35.92,27.71 32.58,25.28 32.58,23.7 36.71,25.28                      "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="22.01,43.91 23.29,47.84 27.42,46.26 27.42,47.84 24.08,50.27 25.36,52.62 25.36,54.2
                               22.01,51.77 18.67,54.2 18.67,52.62 19.95,50.27 16.6,47.84 16.6,46.26 20.74,47.84                        "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="21.54,71.72 22.82,75.65 26.95,74.07 26.95,75.65 23.61,78.08 24.89,80.43 24.89,82.01
                               21.54,79.58 18.2,82.01 18.2,80.43 19.48,78.08 16.13,75.65 16.13,74.07 20.27,75.65                       "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="38.6,93.8 39.88,97.73 44.01,96.15 44.01,97.73 40.67,100.16 41.95,102.5 41.95,104.09
                               38.6,101.66 35.26,104.09 35.26,102.5 36.54,100.16 33.19,97.73 33.19,96.15 37.33,97.73                   "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="90.01,21.35 88.74,25.28 84.6,23.7 84.6,25.28 87.95,27.71 86.67,30.05 86.67,31.64
                               90.01,29.21 93.36,31.64 93.36,30.05 92.08,27.71 95.42,25.28 95.42,23.7 91.29,25.28                      "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="105.99,43.91 104.71,47.84 100.58,46.26 100.58,47.84 103.92,50.27 102.64,52.62
                               102.64,54.2 105.99,51.77 109.33,54.2 109.33,52.62 108.05,50.27 111.4,47.84 111.4,46.26 107.26,47.84                     "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="106.46,71.72 105.18,75.65 101.05,74.07 101.05,75.65 104.39,78.08 103.11,80.43
                               103.11,82.01 106.46,79.58 109.8,82.01 109.8,80.43 108.52,78.08 111.87,75.65 111.87,74.07 107.73,75.65                   "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="89.4,93.8 88.12,97.73 83.99,96.15 83.99,97.73 87.33,100.16 86.05,102.5 86.05,104.09
                               89.4,101.66 92.74,104.09 92.74,102.5 91.46,100.16 94.81,97.73 94.81,96.15 90.67,97.73                   "/>
               </g>
       </g>
       <g>
               <g>
                       <polygon style="fill:#FFF176;" points="89.4,92.21 90.67,96.14 94.81,96.14 91.46,98.57 92.74,102.5 89.4,100.07 86.05,102.5
                               87.33,98.57 83.99,96.14 88.12,96.14                     "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="106.46,70.14 107.73,74.07 111.87,74.07 108.52,76.5 109.8,80.43 106.46,78 103.11,80.43
                               104.39,76.5 101.05,74.07 105.18,74.07                   "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="105.99,42.33 107.26,46.26 111.4,46.26 108.05,48.69 109.33,52.62 105.99,50.19
                               102.64,52.62 103.92,48.69 100.58,46.26 104.71,46.26                     "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="90.01,19.76 91.29,23.69 95.42,23.69 92.08,26.12 93.36,30.05 90.01,27.62 86.67,30.05
                               87.95,26.12 84.6,23.69 88.74,23.69                      "/>
               </g>
       </g>
       <g>
               <g>
                       <polygon style="fill:#D38200;" points="64.05,102.5 65.33,106.43 69.46,104.85 69.46,106.43 66.12,108.86 67.4,111.21
                               67.4,112.79 64.05,110.36 60.71,112.79 60.71,111.21 61.99,108.86 58.64,106.43 58.64,104.85 62.78,106.43                  "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="64.05,100.4 65.33,104.33 69.46,104.33 66.12,106.76 67.4,110.69 64.05,108.26
                               60.71,110.69 61.99,106.76 58.64,104.33 62.78,104.33                     "/>
               </g>
               <g>
                       <polygon style="fill:#D38200;" points="64.05,12.89 65.33,16.82 69.46,15.24 69.46,16.82 66.12,19.25 67.4,21.6 67.4,23.18
                               64.05,20.75 60.71,23.18 60.71,21.6 61.99,19.25 58.64,16.82 58.64,15.24 62.78,16.82                      "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="64.05,11.31 65.33,15.24 69.46,15.24 66.12,17.67 67.4,21.6 64.05,19.17 60.71,21.6
                               61.99,17.67 58.64,15.24 62.78,15.24                     "/>
               </g>
       </g>
       <g>
               <g>
                       <polygon style="fill:#FFF176;" points="38.6,92.21 37.33,96.14 33.19,96.14 36.54,98.57 35.26,102.5 38.6,100.07 41.95,102.5
                               40.67,98.57 44.01,96.14 39.88,96.14                     "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="21.54,70.14 20.27,74.07 16.13,74.07 19.48,76.5 18.2,80.43 21.54,78 24.89,80.43
                               23.61,76.5 26.95,74.07 22.82,74.07                      "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="22.01,42.33 20.74,46.26 16.6,46.26 19.95,48.69 18.67,52.62 22.01,50.19 25.36,52.62
                               24.08,48.69 27.42,46.26 23.29,46.26                     "/>
               </g>
               <g>
                       <polygon style="fill:#FFF176;" points="37.99,19.76 36.71,23.69 32.58,23.69 35.92,26.12 34.64,30.05 37.99,27.62 41.33,30.05
                               40.05,26.12 43.4,23.69 39.26,23.69                      "/>
               </g>
       </g>
       <path style="fill:#D38200;" d="M95.22,48.2c0-0.35-62.38,0-62.38,0l-0.56,1.68l0,2.87c0,0.52,0.42,0.94,0.94,0.94h30.99v0h30.57
               c0.52,0,0.94-0.42,0.94-0.94v-2.79L95.22,48.2z"/>
       <path style="fill:#D38200;" d="M95.31,85.5l-62.21,0l-4.16,2.09l0.05,2.69c0.01,0.29,0.25,0.53,0.55,0.53l68.93,0
               c0.29,0,0.54-0.23,0.55-0.53l0.05-2.64L95.31,85.5z"/>
       <g>
               <g>
                       <path style="fill:#D38200;" d="M43.13,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C44.19,75.28,43.71,77.32,43.13,77.32z"
                               />
                       <path style="fill:#D38200;" d="M44.35,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93
                               C45.19,57.71,44.8,58.01,44.35,58.01z"/>
                       <path style="fill:#D38200;" d="M38.32,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C36.99,78.81,37.87,78.51,38.32,78.51z"/>
               </g>
       </g>
       <g>
               <g>
                       <path style="fill:#D38200;" d="M89.63,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C90.69,75.28,90.22,77.32,89.63,77.32z"
                               />
                       <path style="fill:#D38200;" d="M90.85,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93
                               C91.69,57.71,91.3,58.01,90.85,58.01z"/>
                       <path style="fill:#D38200;" d="M84.82,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C83.49,78.81,84.37,78.51,84.82,78.51z"/>
               </g>
       </g>
       <g>
               <g>
                       <path style="fill:#D38200;" d="M74.13,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C75.19,75.28,74.72,77.32,74.13,77.32z"
                               />
                       <path style="fill:#D38200;" d="M75.35,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93
                               C76.19,57.71,75.8,58.01,75.35,58.01z"/>
                       <path style="fill:#D38200;" d="M69.32,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C67.99,78.81,68.87,78.51,69.32,78.51z"/>
               </g>
       </g>
       <g>
               <g>
                       <path style="fill:#D38200;" d="M58.63,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C59.69,75.28,59.22,77.32,58.63,77.32z"
                               />
                       <path style="fill:#D38200;" d="M59.85,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93
                               C60.69,57.71,60.3,58.01,59.85,58.01z"/>
                       <path style="fill:#D38200;" d="M53.82,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C52.49,78.81,53.37,78.51,53.82,78.51z"/>
               </g>
       </g>
       <path style="fill:#FFF176;" d="M95.67,45.52c0-0.35-0.18-0.68-0.45-0.84l-31.18-17.7L32.82,44.66c-0.3,0.18-0.49,0.51-0.49,0.86
               l-0.05,4.37c0,0.55,0.45,1,1,1h61.43c0.55,0,1-0.45,1-1L95.67,45.52z"/>
       <polygon style="fill:#F2BC1A;" points="87.84,44.33 64,30.8 40.16,44.33  "/>
       <polygon style="fill:#FFF176;" points="79.07,42.68 64,34.12 48.93,42.68         "/>
       <path style="fill:#FFF176;" d="M93.39,82.02H34.61c-0.58,0-1.13,0.25-1.52,0.68l-4.04,4.51c-0.28,0.31-0.06,0.8,0.36,0.8h69.18
               c0.41,0,0.63-0.49,0.36-0.8L94.9,82.7C94.52,82.27,93.96,82.02,93.39,82.02z"/>
       <g>
               <g>
                       <path style="fill:#FFF176;" d="M89.63,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58
                               c0.59,0,1.07,0.48,1.07,1.07v15.99C90.7,75.04,90.22,75.51,89.63,75.51z"/>
                       <path style="fill:#FFF176;" d="M90.86,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95
                               c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C91.7,55.9,91.3,56.2,90.86,56.2z"/>
                       <path style="fill:#FFF176;" d="M84.82,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C83.98,77,84.38,76.71,84.82,76.71z"/>
               </g>
               <g>
                       <path style="fill:#FFF176;" d="M43.13,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58
                               c0.59,0,1.07,0.48,1.07,1.07v15.99C44.19,75.04,43.71,75.51,43.13,75.51z"/>
                       <path style="fill:#FFF176;" d="M44.35,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95
                               c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C45.19,55.9,44.8,56.2,44.35,56.2z"/>
                       <path style="fill:#FFF176;" d="M38.32,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C37.48,77,37.87,76.71,38.32,76.71z"/>
               </g>
               <g>
                       <path style="fill:#FFF176;" d="M58.63,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58
                               c0.59,0,1.07,0.48,1.07,1.07v15.99C59.69,75.04,59.22,75.51,58.63,75.51z"/>
                       <path style="fill:#FFF176;" d="M59.85,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95
                               c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C60.69,55.9,60.3,56.2,59.85,56.2z"/>
                       <path style="fill:#FFF176;" d="M53.82,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C52.98,77,53.37,76.71,53.82,76.71z"/>
               </g>
               <g>
                       <path style="fill:#FFF176;" d="M74.13,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58
                               c0.59,0,1.07,0.48,1.07,1.07v15.99C75.19,75.04,74.72,75.51,74.13,75.51z"/>
                       <path style="fill:#FFF176;" d="M75.35,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95
                               c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C76.19,55.9,75.8,56.2,75.35,56.2z"/>
                       <path style="fill:#FFF176;" d="M69.32,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95
                               c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C68.48,77,68.88,76.71,69.32,76.71z"/>
               </g>
       </g>
</g>
</svg>
        `)
		).toBe(
			'<svg version="1.1" id="Layer_9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve"><g><circle style="fill:#D68F30;" cx="64" cy="66.58" r="57.36"/><g><g><path style="fill:#BC6F00;" d="M10.54,81.48v5.86c0.6,1.55,1.27,3.08,2,4.56V81.48H10.54z"/></g><g><path style="fill:#BC6F00;" d="M17.08,92.51v7.04c0.8,1.13,1.63,2.24,2.5,3.31V92.51H17.08z"/></g><g><path style="fill:#BC6F00;" d="M25.74,101.71v7.59c0.97,0.87,1.97,1.7,3,2.5v-10.09H25.74z"/></g><g><path style="fill:#BC6F00;" d="M36.4,108.7v8.16c0.98,0.54,1.98,1.05,3,1.54v-9.7H36.4z"/></g><g><path style="fill:#BC6F00;" d="M48.49,113.15v8.64c0.99,0.28,1.99,0.53,3,0.76v-9.4H48.49z"/></g><g><path style="fill:#BC6F00;" d="M62.64,114.69v9.21c0.45,0.01,0.9,0.03,1.36,0.03c0.55,0,1.1-0.03,1.64-0.04v-9.2H62.64z"/></g><g><path style="fill:#BC6F00;" d="M76.79,113.08v9.4c1.01-0.23,2.01-0.49,3-0.77v-8.63H76.79z"/></g><g><path style="fill:#BC6F00;" d="M88.85,108.57v9.71c1.02-0.49,2.02-1.02,3-1.57v-8.14H88.85z"/></g><g><path style="fill:#BC6F00;" d="M99.48,101.52v10.1c1.03-0.81,2.03-1.64,3-2.52v-7.58H99.48z"/></g><g><path style="fill:#BC6F00;" d="M111.09,92.29h-2.5v10.35c0.87-1.08,1.71-2.19,2.5-3.33V92.29z"/></g><g><path style="fill:#BC6F00;" d="M117.59,81.22h-2v10.44c0.73-1.51,1.4-3.06,2-4.63V81.22z"/></g></g><circle style="fill:#FFF176;" cx="64" cy="61.42" r="57.36"/><circle style="fill:#F2BC1A;" cx="64" cy="61.42" r="52.25"/><g><path style="fill:#E08F00;" d="M11.65,63.42c-0.37-6.88,0.82-13.86,3.22-20.4c2.5-6.52,6.33-12.55,11.16-17.67 C35.73,15.09,49.81,9.14,64,9.07c14.19,0.08,28.28,6.02,37.96,16.29c4.84,5.11,8.66,11.15,11.16,17.66 c2.41,6.55,3.6,13.52,3.22,20.4h-0.2c-0.02-6.85-1.38-13.68-4-20c-2.61-6.32-6.48-12.12-11.29-16.97 c-4.82-4.85-10.59-8.75-16.9-11.38c-6.3-2.64-13.13-4-19.96-4c-6.83,0-13.66,1.36-19.96,4c-6.31,2.63-12.08,6.53-16.9,11.38 c-4.82,4.85-8.68,10.65-11.29,16.97c-2.62,6.32-3.98,13.15-4,20H11.65z"/></g><path style="fill:#FFF176;" d="M64,4.07c-31.68,0-57.36,25.68-57.36,57.36c0,31.68,25.68,57.36,57.36,57.36 s57.36-25.68,57.36-57.36C121.36,29.75,95.68,4.07,64,4.07z M64,113.68c-28.86,0-52.25-23.39-52.25-52.25 C11.75,32.56,35.14,9.17,64,9.17s52.25,23.39,52.25,52.25C116.25,90.28,92.86,113.68,64,113.68z"/><g><g><polygon style="fill:#D38200;" points="37.99,21.35 39.26,25.28 43.4,23.7 43.4,25.28 40.05,27.71 41.33,30.05 41.33,31.64 37.99,29.21 34.64,31.64 34.64,30.05 35.92,27.71 32.58,25.28 32.58,23.7 36.71,25.28"/></g><g><polygon style="fill:#D38200;" points="22.01,43.91 23.29,47.84 27.42,46.26 27.42,47.84 24.08,50.27 25.36,52.62 25.36,54.2 22.01,51.77 18.67,54.2 18.67,52.62 19.95,50.27 16.6,47.84 16.6,46.26 20.74,47.84"/></g><g><polygon style="fill:#D38200;" points="21.54,71.72 22.82,75.65 26.95,74.07 26.95,75.65 23.61,78.08 24.89,80.43 24.89,82.01 21.54,79.58 18.2,82.01 18.2,80.43 19.48,78.08 16.13,75.65 16.13,74.07 20.27,75.65"/></g><g><polygon style="fill:#D38200;" points="38.6,93.8 39.88,97.73 44.01,96.15 44.01,97.73 40.67,100.16 41.95,102.5 41.95,104.09 38.6,101.66 35.26,104.09 35.26,102.5 36.54,100.16 33.19,97.73 33.19,96.15 37.33,97.73"/></g><g><polygon style="fill:#D38200;" points="90.01,21.35 88.74,25.28 84.6,23.7 84.6,25.28 87.95,27.71 86.67,30.05 86.67,31.64 90.01,29.21 93.36,31.64 93.36,30.05 92.08,27.71 95.42,25.28 95.42,23.7 91.29,25.28"/></g><g><polygon style="fill:#D38200;" points="105.99,43.91 104.71,47.84 100.58,46.26 100.58,47.84 103.92,50.27 102.64,52.62 102.64,54.2 105.99,51.77 109.33,54.2 109.33,52.62 108.05,50.27 111.4,47.84 111.4,46.26 107.26,47.84"/></g><g><polygon style="fill:#D38200;" points="106.46,71.72 105.18,75.65 101.05,74.07 101.05,75.65 104.39,78.08 103.11,80.43 103.11,82.01 106.46,79.58 109.8,82.01 109.8,80.43 108.52,78.08 111.87,75.65 111.87,74.07 107.73,75.65"/></g><g><polygon style="fill:#D38200;" points="89.4,93.8 88.12,97.73 83.99,96.15 83.99,97.73 87.33,100.16 86.05,102.5 86.05,104.09 89.4,101.66 92.74,104.09 92.74,102.5 91.46,100.16 94.81,97.73 94.81,96.15 90.67,97.73"/></g></g><g><g><polygon style="fill:#FFF176;" points="89.4,92.21 90.67,96.14 94.81,96.14 91.46,98.57 92.74,102.5 89.4,100.07 86.05,102.5 87.33,98.57 83.99,96.14 88.12,96.14"/></g><g><polygon style="fill:#FFF176;" points="106.46,70.14 107.73,74.07 111.87,74.07 108.52,76.5 109.8,80.43 106.46,78 103.11,80.43 104.39,76.5 101.05,74.07 105.18,74.07"/></g><g><polygon style="fill:#FFF176;" points="105.99,42.33 107.26,46.26 111.4,46.26 108.05,48.69 109.33,52.62 105.99,50.19 102.64,52.62 103.92,48.69 100.58,46.26 104.71,46.26"/></g><g><polygon style="fill:#FFF176;" points="90.01,19.76 91.29,23.69 95.42,23.69 92.08,26.12 93.36,30.05 90.01,27.62 86.67,30.05 87.95,26.12 84.6,23.69 88.74,23.69"/></g></g><g><g><polygon style="fill:#D38200;" points="64.05,102.5 65.33,106.43 69.46,104.85 69.46,106.43 66.12,108.86 67.4,111.21 67.4,112.79 64.05,110.36 60.71,112.79 60.71,111.21 61.99,108.86 58.64,106.43 58.64,104.85 62.78,106.43"/></g><g><polygon style="fill:#FFF176;" points="64.05,100.4 65.33,104.33 69.46,104.33 66.12,106.76 67.4,110.69 64.05,108.26 60.71,110.69 61.99,106.76 58.64,104.33 62.78,104.33"/></g><g><polygon style="fill:#D38200;" points="64.05,12.89 65.33,16.82 69.46,15.24 69.46,16.82 66.12,19.25 67.4,21.6 67.4,23.18 64.05,20.75 60.71,23.18 60.71,21.6 61.99,19.25 58.64,16.82 58.64,15.24 62.78,16.82"/></g><g><polygon style="fill:#FFF176;" points="64.05,11.31 65.33,15.24 69.46,15.24 66.12,17.67 67.4,21.6 64.05,19.17 60.71,21.6 61.99,17.67 58.64,15.24 62.78,15.24"/></g></g><g><g><polygon style="fill:#FFF176;" points="38.6,92.21 37.33,96.14 33.19,96.14 36.54,98.57 35.26,102.5 38.6,100.07 41.95,102.5 40.67,98.57 44.01,96.14 39.88,96.14"/></g><g><polygon style="fill:#FFF176;" points="21.54,70.14 20.27,74.07 16.13,74.07 19.48,76.5 18.2,80.43 21.54,78 24.89,80.43 23.61,76.5 26.95,74.07 22.82,74.07"/></g><g><polygon style="fill:#FFF176;" points="22.01,42.33 20.74,46.26 16.6,46.26 19.95,48.69 18.67,52.62 22.01,50.19 25.36,52.62 24.08,48.69 27.42,46.26 23.29,46.26"/></g><g><polygon style="fill:#FFF176;" points="37.99,19.76 36.71,23.69 32.58,23.69 35.92,26.12 34.64,30.05 37.99,27.62 41.33,30.05 40.05,26.12 43.4,23.69 39.26,23.69"/></g></g><path style="fill:#D38200;" d="M95.22,48.2c0-0.35-62.38,0-62.38,0l-0.56,1.68l0,2.87c0,0.52,0.42,0.94,0.94,0.94h30.99v0h30.57 c0.52,0,0.94-0.42,0.94-0.94v-2.79L95.22,48.2z"/><path style="fill:#D38200;" d="M95.31,85.5l-62.21,0l-4.16,2.09l0.05,2.69c0.01,0.29,0.25,0.53,0.55,0.53l68.93,0 c0.29,0,0.54-0.23,0.55-0.53l0.05-2.64L95.31,85.5z"/><g><g><path style="fill:#D38200;" d="M43.13,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C44.19,75.28,43.71,77.32,43.13,77.32z"/><path style="fill:#D38200;" d="M44.35,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93 C45.19,57.71,44.8,58.01,44.35,58.01z"/><path style="fill:#D38200;" d="M38.32,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C36.99,78.81,37.87,78.51,38.32,78.51z"/></g></g><g><g><path style="fill:#D38200;" d="M89.63,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C90.69,75.28,90.22,77.32,89.63,77.32z"/><path style="fill:#D38200;" d="M90.85,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93 C91.69,57.71,91.3,58.01,90.85,58.01z"/><path style="fill:#D38200;" d="M84.82,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C83.49,78.81,84.37,78.51,84.82,78.51z"/></g></g><g><g><path style="fill:#D38200;" d="M74.13,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C75.19,75.28,74.72,77.32,74.13,77.32z"/><path style="fill:#D38200;" d="M75.35,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93 C76.19,57.71,75.8,58.01,75.35,58.01z"/><path style="fill:#D38200;" d="M69.32,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C67.99,78.81,68.87,78.51,69.32,78.51z"/></g></g><g><g><path style="fill:#D38200;" d="M58.63,77.32h-3.58c-0.59,0-1.07-1.86-1.07-2.45l5.71-0.18C59.69,75.28,59.22,77.32,58.63,77.32z"/><path style="fill:#D38200;" d="M59.85,58.01h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.47-3.93h8.83l-0.4,3.93 C60.69,57.71,60.3,58.01,59.85,58.01z"/><path style="fill:#D38200;" d="M53.82,78.51h6.03c0.45,0,1.34,0.28,1.46,0.71c0,0-0.03,1.87-0.03,2.61s-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-0.97-0.6-0.97-1.28s-0.03-2.59-0.03-2.59C52.49,78.81,53.37,78.51,53.82,78.51z"/></g></g><path style="fill:#FFF176;" d="M95.67,45.52c0-0.35-0.18-0.68-0.45-0.84l-31.18-17.7L32.82,44.66c-0.3,0.18-0.49,0.51-0.49,0.86 l-0.05,4.37c0,0.55,0.45,1,1,1h61.43c0.55,0,1-0.45,1-1L95.67,45.52z"/><polygon style="fill:#F2BC1A;" points="87.84,44.33 64,30.8 40.16,44.33"/><polygon style="fill:#FFF176;" points="79.07,42.68 64,34.12 48.93,42.68"/><path style="fill:#FFF176;" d="M93.39,82.02H34.61c-0.58,0-1.13,0.25-1.52,0.68l-4.04,4.51c-0.28,0.31-0.06,0.8,0.36,0.8h69.18 c0.41,0,0.63-0.49,0.36-0.8L94.9,82.7C94.52,82.27,93.96,82.02,93.39,82.02z"/><g><g><path style="fill:#FFF176;" d="M89.63,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58 c0.59,0,1.07,0.48,1.07,1.07v15.99C90.7,75.04,90.22,75.51,89.63,75.51z"/><path style="fill:#FFF176;" d="M90.86,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95 c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C91.7,55.9,91.3,56.2,90.86,56.2z"/><path style="fill:#FFF176;" d="M84.82,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C83.98,77,84.38,76.71,84.82,76.71z"/></g><g><path style="fill:#FFF176;" d="M43.13,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58 c0.59,0,1.07,0.48,1.07,1.07v15.99C44.19,75.04,43.71,75.51,43.13,75.51z"/><path style="fill:#FFF176;" d="M44.35,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95 c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C45.19,55.9,44.8,56.2,44.35,56.2z"/><path style="fill:#FFF176;" d="M38.32,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C37.48,77,37.87,76.71,38.32,76.71z"/></g><g><path style="fill:#FFF176;" d="M58.63,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58 c0.59,0,1.07,0.48,1.07,1.07v15.99C59.69,75.04,59.22,75.51,58.63,75.51z"/><path style="fill:#FFF176;" d="M59.85,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95 c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C60.69,55.9,60.3,56.2,59.85,56.2z"/><path style="fill:#FFF176;" d="M53.82,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C52.98,77,53.37,76.71,53.82,76.71z"/></g><g><path style="fill:#FFF176;" d="M74.13,75.51h-3.58c-0.59,0-1.07-0.48-1.07-1.07V58.46c0-0.59,0.48-1.07,1.07-1.07h3.58 c0.59,0,1.07,0.48,1.07,1.07v15.99C75.19,75.04,74.72,75.51,74.13,75.51z"/><path style="fill:#FFF176;" d="M75.35,56.2h-6.03c-0.45,0-0.84-0.3-0.97-0.73l-0.46-1.59c-0.19-0.64,0.3-1.28,0.97-1.28h6.95 c0.67,0,1.15,0.64,0.97,1.28l-0.46,1.59C76.19,55.9,75.8,56.2,75.35,56.2z"/><path style="fill:#FFF176;" d="M69.32,76.71h6.03c0.45,0,0.84,0.3,0.97,0.73l0.46,1.59c0.19,0.64-0.3,1.28-0.97,1.28h-6.95 c-0.67,0-1.15-0.64-0.97-1.28l0.46-1.59C68.48,77,68.88,76.71,69.32,76.71z"/></g></g></g></svg>'
		);
	});
});
