Button groups arrange multiple buttons in a horizontal or vertical group.

```js static
import { ButtonGroup } from 'blueprint-components';
```

Additionally:

```js static
import { Button, Classes } from '@blueprintjs/core';
```

```html static
<ButtonGroup>
  <Button iconName="user" />
  <Button iconName="notifications" />
  <Button iconName="cog" />  
</ButtonGroup>
```

```jsx
<ButtonGroup>
  <Button iconName="user" />
  <Button iconName="notifications" />
  <Button iconName="cog" />  
</ButtonGroup>
```

### Button Group Large

To use large buttons in button group, add optional `large` prop:

```html static
<ButtonGroup large>
  ...
</ButtonGroup>
```

```jsx
<ButtonGroup large>
  <Button iconName="user" text="Profile" />
  <Button iconName="notifications" text="Notifications" />
  <Button iconName="cog" text="Settings" />  
</ButtonGroup>
```

### Button Group Minimal

To use minimal buttons in button group, add optional `minimal` prop:

```html static
<ButtonGroup minimal>
  ...
</ButtonGroup>
```

Alternatively, you can add `className` property with `Classes.MINIMAL`: 

> This concept works with `large`, `vertical` and other styles as well.

```html static
<ButtonGroup className={Classes.MINIMAL}>
  ...
</ButtonGroup>
```

```jsx
<ButtonGroup minimal>
  <Button iconName="user" />
  <Button iconName="notifications" />
  <Button iconName="cog" />  
</ButtonGroup>
```


### Button Group Fill

Fill button group makes all buttons expand equally to fill the available space.

To make individual button to stay it's original size, you need to add `className={Classes.FIXED}` prop or just `pt-fixed` CSS class to that button. 

Take a look at the first and last buttons in the example below.

```html static
<ButtonGroup fill>
  ...
</ButtonGroup>
```

```jsx
<ButtonGroup fill>
  <Button className={Classes.FIXED} iconName="chart" />
  <Button iconName="control" />
  <Button iconName="graph" />
  <Button iconName="camera" />
  <Button iconName="map" />  
  <Button iconName="code" />  
  <Button iconName="th" />  
  <Button iconName="time" />  
  <Button className="pt-fixed" iconName="compressed" />  
</ButtonGroup>
```

Alternatively, you can add the `pt-fill` CSS class to an individual button (instead of to the container) to expand it to fill the available space while other buttons retain their original sizes.

```jsx
<ButtonGroup fill>
  <Button iconName="arrow-left" />
  <Button className="pt-fill" text="Middle" />
  <Button iconName="arrow-right" />
</ButtonGroup>
```

### Button Group Vertical

To create vertical button group, add optional `vertical` prop:

```html static
<ButtonGroup vertical>
  ...
</ButtonGroup>
```

```jsx
<div>

  <div className="mr">
    <ButtonGroup vertical>
      <Button text="Profile" />  
      <Button text="Notifications" />  
      <Button text="Settings" />  
    </ButtonGroup>
  </div>

  <ButtonGroup vertical>
    <Button iconName="user" />
    <Button iconName="notifications" />
    <Button iconName="cog" />  
  </ButtonGroup>

</div>
```

When using vertical button group, you can align text and icons to the left. By default they are aligned to center. To do so, you need to add optional `align` prop with value `left`. You can also mix different styles.

```html static
<ButtonGroup vertical large align="left">
  ...
</ButtonGroup>
```

```jsx
<ButtonGroup vertical large align="left">
  <Button intent={Intent.SUCCESS} iconName="document" text="Text" />
  <Button iconName="media" active text="Media" />
  <Button iconName="link" text="Sources" />  
</ButtonGroup>
```



