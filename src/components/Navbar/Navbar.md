Navbar present useful navigation controls at the top of an application.

```js static
import { Navbar, NavbarHeading, NavbarDivider, NavbarGroup } from 'blueprint-components';
```

Additionally:

```js static
import { Button, Classes } from '@blueprintjs/core';
```

```html static
<Navbar>
  <NavbarGroup>
    <NavbarHeading>
      Blueprint Components
    </NavbarHeading>
    <input className="pt-input" placeholder="Search files..." type="text" />
  </NavbarGroup>
  <NavbarGroup align="right">
    <Button className={Classes.MINIMAL} iconName="home">Home</Button>  
    <Button className={Classes.MINIMAL} iconName="document" text="Files" />  
    <NavbarDivider />
    <Button className={Classes.MINIMAL} iconName="user" />
    <Button className={Classes.MINIMAL} iconName="notifications" />
    <Button className={Classes.MINIMAL} iconName="cog" />  
  </NavbarGroup>
</Navbar>
```


```jsx
<Navbar>
  <NavbarGroup>
    <NavbarHeading>
      Blueprint Components
    </NavbarHeading>
    <input className="pt-input" placeholder="Search files..." type="text" />
  </NavbarGroup>
  <NavbarGroup align="right">
    <Button className={Classes.MINIMAL} iconName="home">Home</Button>  
    <Button className={Classes.MINIMAL} iconName="document" text="Files" />  
    <NavbarDivider />
    <Button className={Classes.MINIMAL} iconName="user" />
    <Button className={Classes.MINIMAL} iconName="notifications" />
    <Button className={Classes.MINIMAL} iconName="cog" />  
  </NavbarGroup>
</Navbar>
```

### Navbar Dark

To apply Dark Theme to `Navbar`, add optional `dark` prop:

```html
<Navbar dark>{children}</Navbar>
```

```jsx
<Navbar dark>
  <NavbarGroup>
    <NavbarHeading>
      Blueprint Components
    </NavbarHeading>
    <input className="pt-input" placeholder="Search files..." type="text" />
  </NavbarGroup>
  <NavbarGroup align="right">
    <Button className={Classes.MINIMAL} iconName="home">Home</Button>  
    <Button className={Classes.MINIMAL} iconName="document" text="Files" />  
    <NavbarDivider />
    <Button className={Classes.MINIMAL} iconName="user" />
    <Button className={Classes.MINIMAL} iconName="notifications" />
    <Button className={Classes.MINIMAL} iconName="cog" />  
  </NavbarGroup>
</Navbar>
```

### Navbar Fixed

To attach the `Navbar` component to the top of the viewport, add optional `fixed` prop:

```html
<Navbar fixed>{children}</Navbar>
```

### Navbar Heading

Navbar heading is larger text for your application title.

```html
<NavbarHeading>Blueprint Components</NavbarHeading>
```

### Navbar Divider

Navbar Divider is thin vertical line that can be placed in Navbar Groups.

```html
<NavbarDivider />
```

### Navbar Group

Navbar Group is left or right aligned section of `Navbar`.


#### Props

- `align` - (`left` | `right`). **Default**: `left`. *(optional)*

```html
<NavbarGroup align="left|right">{children}</NavbarGroup>
```
