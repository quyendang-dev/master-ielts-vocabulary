Master ielts vocabulary
=========

Master ielts vocabulary is a chrome extension that displays definitions of tough words. <br>
Inspired by <li> [Kindle Word-Wise](https://www.amazon.com/gp/feature.html?ie=UTF8&docId=1002989731) </li>
            <li> [Voracious](https://github.com/sanchitgn/voracious) </li>
<br>            
Build new dictionary by collect vocabulary from book "Boost Vocabulary by Dinh Thang"
<br>
Build this app for my wife could learn new vocabularies as a IELTS preparation step.

## Installation:

Fetch all the dependencies by running `$ yarn`.

`$ yarn build` will build the source

Choose `Load unpacked extension` from the `chrome://extensions` and navigate to the build folder. Make sure you are in the developer mode.

## TODO:

- [ ] Move dictionary to IndexedDB.
- [ ] Improve dictionary.
- [x] Fix white-space issue when annotated.
- [x] Add styles to <ruby>, to override native styles
- [x] Avoid using innerText; Improve traversal.
- [ ] Improve word detection algorithm.
- [x] Improve article detection.
- [ ] Implement options page to select word difficulty.
- [x] Limit annotated text width; Display full text on mouse over.
- [x] Procure a dictionary with difficulty level, (Dictionary.com).
- [x] Run content-script on page idle instead of relying on time-out.
- [x] Prevent subsequent definitions from showing.
- [ ] Add extension to Opera & Firefox.
