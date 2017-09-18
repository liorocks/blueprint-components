Card is a bounded unit of UI content with a solid background color.

```js static
import { Card } from 'blueprint-components';
```

```html static
<Card>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
</Card>
```

An elevation applies a drop shadow that simulates height in the UI. 
To add an elevation to card component, add `elevation` prop with values from **0** to **4**.

```html static
<Card elevation={(0|1|2|3|4)}>
  ...
</Card>
```

```jsx
<div>
  <div className="df">
    <div className="mr mb">
      <Card>
        <strong>Elevation - None</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
      </Card>
    </div>
    <div className="mr mb">
      <Card elevation={0}>
        <strong>Elevation - 0</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
      </Card>
    </div>
    <div className="mr mb">
      <Card elevation={1}>
        <strong>Elevation - 1</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
      </Card>
    </div>
  </div>
  <div className="df">
    <div className="mr mb">
      <Card elevation={2}>
        <strong>Elevation - 2</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
      </Card>
    </div>
    <div className="mr mb">
      <Card elevation={3}>
        <strong>Elevation - 3</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
      </Card>
    </div>
    <div className="mr mb">
      <Card elevation={4}>
        <strong>Elevation - 4</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
      </Card>
    </div>  
  </div>
</div>
```

### Interactive Cards

Adds respond to user interactions on cards. Just add the `interactive` prop:

```html static
<Card interactive>
  ...
</Card>
```


```jsx
<div className="df">
  <div className="mr">
    <Card interactive>
      <h5><a href="#">Trader Profile</a></h5>
      <p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
    </Card>
  </div>
  <div className="mr">
    <Card interactive>
      <h5><a href="#">Desk Profile</a></h5>
      <p>Desk-level summary of trading activity and trading profiles.</p>
    </Card>
  </div>
  <div>
    <Card interactive>
      <h5><a href="#">Dataset Dashboards</a></h5>
      <p>Stats of dataset completeness and reference data join percentages.</p>
    </Card>
  </div>
</div>
```
