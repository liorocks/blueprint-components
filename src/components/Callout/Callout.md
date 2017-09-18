Callouts visually highlight important content for the user.

```js static
import { Callout } from 'blueprint-components';
```

Additionally:

```js static
import { Intent, Classes } from '@blueprintjs/core';
```

```html static
<Callout>
  <h5>Callout Heading</h5>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
</Callout>
```

Callouts have 4 different styles: `primary`, `success`, `warning`, `danger` and one `default`.

It can be applied with `intent` prop or additional CSS classnames.

```jsx
<div>
  <div className="mb">
    <Callout>
      <h5>Callout Default</h5>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>
  </div>
  <div className="mb">
    <Callout className="pt-intent-primary">
      <h5>Callout Primary</h5>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>
  </div>
  <div className="mb">
    <Callout className={Classes.INTENT_SUCCESS}>
      <h5>Callout Success</h5>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>  
  </div>
  <div className="mb">
    <Callout intent={Intent.WARNING}>
      <h5>Callout Warning</h5>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>
  </div>
  <div className="mb">
    <Callout intent={Intent.DANGER}>
      <h5>Callout Danger</h5>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>
  </div>
</div>
```

### With Icon

```jsx
<Callout iconName="info-sign" intent={Intent.PRIMARY}>
  <h5>Callout with Icon</h5>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
</Callout>
```
