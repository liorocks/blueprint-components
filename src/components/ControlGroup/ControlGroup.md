Control group renders several distinct controls as one unit, squaring the borders between them.

 It supports any number of `Button`, `InputGroup`, `input` and `select` elements as direct children.

 > Note that `ControlGroup` does not cascade any modifiers to its children. For example, each child must be marked individually as `.pt-large` for uniform large appearance.

```js static
import { ControlGroup } from 'blueprint-components';
```

Additionally:

```js static
import { Button, Classes, Icon, InputGroup, Intent } from '@blueprintjs/core';
```

```jsx
<ControlGroup>
  <Button text="filter" iconName="filter" />
  <input type="text" className="pt-input" placeholder="Find filters..." />
</ControlGroup>
```

```jsx
<ControlGroup>
  <div className="pt-select">
    <select onChange={() => {}}>
      <option>Filter...</option>
      <option value="1">Issues</option>
      <option value="2">Requests</option>
      <option value="3">Projects</option>
    </select>
  </div>
  <InputGroup leftIconName="search" placeholder="from:ggray to:allorca" />
</ControlGroup>
```

```jsx
<ControlGroup>
  <InputGroup 
    leftIconName="people" 
    placeholder="Find collaborators..."
    rightElement={<Button text="can view" rightIconName="caret-down" className="pt-minimal" intent={Intent.PRIMARY} />}
  />
  <Button intent={Intent.PRIMARY} text="Add" />
</ControlGroup>
```

### Responsive Control Group

To make all elements expand equally to fill the available space, just add the optional `fill` prop.

Then add `Classes.FIXED` or `pt-fixed` CSS class to individual elements to revert them to their original default sizes.

```html static
<ControlGroup fill>
  ...
</ControlGroup>
```

```jsx
<ControlGroup fill>
  <Button className={Classes.FIXED} iconName="minus" />
  <input type="text" placeholder="Enter a value..." className="pt-input" />
  <Button className={Classes.FIXED} iconName="plus" />
</ControlGroup>
```

> Note: In the example below, `ControlGroup` does not have `fill` prop, but instead `InputGroup` has `className={Classes.FILL}`.

```jsx
<ControlGroup>
  <InputGroup className={Classes.FILL} leftIconName="people" placeholder="Find collaborators..." />
  <Button intent={Intent.PRIMARY} text="Add" />
</ControlGroup>
```

### Vertical Control Group

To create a vertical control group, just add optional `vertical` prop:

```html static
<ControlGroup vertical>
  ...
</ControlGroup>
```

```jsx
<ControlGroup vertical style={{width: 300}}>
  <InputGroup className={Classes.LARGE} leftIconName="person" placeholder="Username" />
  <InputGroup className={Classes.LARGE} leftIconName="lock" placeholder="Password" />
  <Button className={Classes.LARGE} intent={Intent.PRIMARY} text="Login" />
</ControlGroup>
```
