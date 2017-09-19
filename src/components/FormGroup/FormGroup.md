Form groups support more complex form controls than simple [labels](#label), such as [control groups](#controlgroup).

```js static
import { FormGroup, Label } from 'blueprint-components';
```

Additionally:

```js static
import { Classes, InputGroup, Intent, Switch } from '@blueprintjs/core';
```

```jsx
<FormGroup 
  label={<Label text="Label A" />}
  helper="Helper text with details / user feedback"
  >
  <InputGroup 
    leftIconName="calendar"
  />
</FormGroup>
```

### Form Group Intent

```html static
<FormGroup intent={Intent.SUCCESS}>
  ...
</FormGroup>
```

```jsx
<div>
  <FormGroup 
    intent={Intent.SUCCESS}
    label={<Label text="Label A" />}
    helper="Intent only FormGroup component"
    >
    <InputGroup 
      leftIconName="calendar"
    />
  </FormGroup>
  <FormGroup 
    intent={Intent.DANGER}
    label={<Label text="Label A" />}
    helper="Disabled with FormGroup and InputGroup components"
    >
    <InputGroup 
      intent={Intent.DANGER}
      leftIconName="calendar"
    />
  </FormGroup>
</div>
```

### Form Group Large

To use larger form elements in `FormGroup`, add optional `large` prop:

> Note: This prop will not increase in size it's children elements. You have to add `className={Classes.LARGE}` prop or `.pt-large` CSS class to these elements. Take a look at the source code of example below.

```html static
<FormGroup large>
  ...
</FormGroup>
```

```jsx
<div>
  <FormGroup 
    large
    label={<Label text="Label A" />}
    helper="Helper text with details / user feedback"
    >
    <InputGroup 
      className={Classes.LARGE}
      leftIconName="calendar"
    />
  </FormGroup>
  <FormGroup 
    className={Classes.LARGE}
    label={<Label text="Label A" />}
    helper="Note: Switch component does NOT work in this example."
    >
    <Switch className={Classes.LARGE} checked={false} label="Public" onChange={() => {}} />
  </FormGroup>
</div>
```

### Form Group Inline

To place form group elements on same line, add optional `inline` prop:

```html static
<FormGroup inline>
  ...
</FormGroup>
```

```jsx
<div>
  <FormGroup 
    inline
    label={<Label text="Label A" />}
    helper="Helper text with details / user feedback"
    >
    <InputGroup 
      leftIconName="calendar"
    />
  </FormGroup>
  <FormGroup 
    inline
    label={<Label text="Label A" />}
    helper="Note: Switch component does NOT work in this example."
    >
    <Switch checked={false} label="Public" onChange={() => {}} />
  </FormGroup>
</div>
```

### Form Group Disabled

To make form group appear as disabled, add optional `disabled` prop:

> Note: This prop will not add `disabled` as attribute to it's children elements. You have to add it manualy on form elments (`input`, `select`) and `.pt-disabled` CSS class to input groups.

```html static
<FormGroup disabled>
  ...
</FormGroup>
```

```jsx
<div>
  <FormGroup 
    disabled
    label={<Label text="Label A" />}
    helper="Disabled only FormGroup component"
    >
    <InputGroup 
      leftIconName="calendar"
    />
  </FormGroup>
  <FormGroup 
    disabled
    label={<Label disabled text="Label A" />}
    helper="Disabled with Label and InputGroup components"
    >
    <InputGroup 
      disabled
      leftIconName="calendar"
    />
  </FormGroup>
  <FormGroup 
    disabled
    label={<Label text="Label A" />}
    helper="Disabled with FormGroup and Switch components"
    >
    <Switch disabled checked={false} label="Public" onChange={() => {}} />
  </FormGroup>
</div>
```
