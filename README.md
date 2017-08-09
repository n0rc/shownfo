## shownfo

A small (client-side) JavaScript lib to convert NFO files from CP437 to UTF-8

### Build:

```sh
> npm install
> npm run build
```

### Usage:

Use `shownfo-bundle.js` in your HTML file:

```html
<script src="shownfo-bundle.js"></script>
```

This makes function `shownfo(url, callback)` available that will fetch the NFO file from `url`, converts its content from CP437 to UTF-8, and provides the result via `callback`:

```js
var url = 'https://example.com/file.nfo';
shownfo(url, function(nfo) {
    console.log(nfo);
});
```
