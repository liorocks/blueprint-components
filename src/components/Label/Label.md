Labels enhance the usability of your forms.

```js static
import { Label } from 'blueprint-components';
```

Additionally:

```js static
import { InputGroup, Button, Classes } from '@blueprintjs/core';
```

Simple labels are useful for basic forms for a single `<input />`.

```jsx
<div className="">
  <Label text="Label A">
    <input className="pt-input" placeholder="Text input" />
  </Label>
  <Label text="Label A" muted="(optional)">
    <input className="pt-input" placeholder="Text input" />
  </Label>
</div>
```

### Inline Label
To place `label` text and children elements on same line, add optional `inline` prop:

```html static
<Label inline>
  ...
</Label>
```

```jsx
<Label text="Date of Birth" inline>
  <InputGroup 
    leftIconName="calendar" 
    placeholder="Select date..."
  />
</Label>
```

### Disabled Label

To make `label` appear as disabled, add optional `disabled` prop:

> Note: This prop will not add `disabled` as attribute to it's children elements. You have to add it manualy on form elments (`input`, `select`) and `.pt-disabled` CSS class to input groups.

```html static
<Label disabled>
  ...
</Label>
```

```jsx
<Label text="Date of Birth" disabled muted=" (disabled only label)">
  <InputGroup 
    leftIconName="calendar" 
    placeholder="Select date..."
  />
</Label>
```

```jsx
<Label text="Date of Birth" disabled muted=" (with disabled input)">
  <InputGroup 
    disabled
    leftIconName="calendar" 
    placeholder="Select date..."
  />
</Label>
```
