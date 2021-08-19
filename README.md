# Bell Schedule

The individual day schedules are generated with hashes added to the base URL, like [https://wallenberg-high.github.io/schedule/#monday](https://wallenberg-high.github.io/schedule/#monday), [/#tuesday](https://wallenberg-high.github.io/schedule/#tuesday) etc.  The [index.js](https://github.com/wallenberg-high/schedule/blob/main/docs/index.js) script adds the day specified in the hash as a class to the `schedule` element, and then the CSS hides all the `day` elements that don't match that day name.  

Period lengths are specified with classes like `length-55`, `length-75`, etc.  The overall height of the day is based on 410 minutes, with period heights calculated as a percentage of that times 78% of the height of the screen.  The font size is based on `2vmin`, so it will scale with the size of the screen or page. 

The HTML page is generated from the contents of the `/docs` directory using GitHub Pages.

The QR codes were generated with [QRCode Monkey](https://www.qrcode-monkey.com/).  They're shown only when an individual day's schedule is printed or saved as a PDF.

The favicon files were generated with [RealFaviconGenerator](https://realfavicongenerator.net/).

PDFs should be saved on macOS Chrome, as it replaces the emoji characters with fairly high-res color images, while Safari doesn't resize the page based on the print height correctly.
