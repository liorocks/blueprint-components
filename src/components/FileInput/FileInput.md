The File Input component extends [File upload](http://blueprintjs.com/docs/#core/components/forms/file-upload) UI and adds various props and `onChange` callback.

```js static
import { FileInput } from 'blueprint-components';
```

```html static
<FileInput />
```

```jsx
<FileInput />
```

### File Input Large

To use larger size file input, add optional `large` prop:

```html static
<FileInput large />
```

```jsx
<FileInput large />
```

### File Input Fill

To take up full width of parent element, add optional `fill` prop:

```html static
<FileInput fill />
```

```jsx
<FileInput fill />
```

### File Input Disabled

To make file input disabled, add optional `disabled` prop:

```html static
<FileInput disabled />
```

```jsx
<FileInput disabled />
```

### File Input Mixed

In the example below, you can select multiple files at once and with `onChange` callback, you'll see the list of file names on `alert` popup.

The first argument of the `onChange` callback is `files` array, were each element is [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object.

```html static
<FileInput 
  fill 
  multiple 
  onChange={(files) => { alert('Selected files: ' + files.map(f => f.name).join(', ')) }}
/>
```

```jsx
<FileInput 
  fill 
  multiple 
  onChange={(files) => { alert('Selected files: ' + files.map(f => f.name).join(', ')) }}
/>
```

### File Input Internalization

For <abbr title="Internalization">i18n</abbr> purposes, if you want to change the `placeholder` message of the file input, you need to add the corresponding prop:

```html static
<FileInput placeholder="Custom placeholder" />
```

```jsx
<FileInput placeholder="Custom placeholder" />
```

If you want to change the `Browse` text, you'll need to add the following code to your CSS:

```css static
.pt-file-upload-input:after {
  content: "YOUR BROWSE TEXT"
}
```
