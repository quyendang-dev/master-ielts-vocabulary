Reader
======

Reader is a chrome extension that displays definitions of tough words. Inspired by [Kindle Word-Wise](https://www.amazon.com/gp/feature.html?ie=UTF8&docId=1002989731)

## Installation:

```
$ yarn
$ yarn build
```

Navigate to the build folder from the chrome://extensions

## TODO:

- [ ] Move dictionary to background to avoid intensive re-initialisation.
- [ ] Improve dictionary
- [ ] Fix white-space issue when annotated
- [ ] Add styles to <ruby>, to override native styles
- [x] Avoid using innerText; Improve traversal
- [ ] Improve word detection algorithm.
- [ ] Implement options page to select word difficulty.
- [ ] Limit annotated text width; Display full text on mouse over.
