# Tailwind Grid Plugin

## Installation

- Install via npm
```
npm install -s tailwind-grid-plugin
```
- Require plugin to your tailwind config file
```js
plugins: [
    require('tailwind-grid-plugin/src/gridPlugin')
]
```

## Configuration

Add to your tailwind config in theme section
```json
theme: {
  distance: {
    '16': '16px',
  }
}
```
This will add the following classes: ```d-16, dx-16, dy-16```, and their responsive versions

## Usage

Change your html code from
```html
<ul class="flex flex-wrap overflow-x-hidden -my-20px md:-mx-16px xl:-mx-21px">
    <li class="flex-shrink-0 w-full md:w-1/2 py-20px md:px-16px xl:px-21px">
        // your code here
    </li>
</ul>
```
To
```html
<ul class="row dy-20 md:d-16 xl:dx-21 cols-1 md:cols-2">
    <li>
        // your code here
    </li>
</ul>
```

#### Example Classes

```css
.row {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.row > * {
    flex-shrink: 0;
}

.d-16 {
    margin: -16px;
}
.d-16 > * {
    padding: 16px;
}

.cols-2 > * {
    width: 50%;
}
```
