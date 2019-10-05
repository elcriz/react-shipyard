Button example:

```js
<Button
    label="Click me"
    onClick={(event) => {
        console.log('Button got clicked!', event);
    }}
/>
```

Various button states:

```js
<Button
    label="Hovered"
    isHovered
/>

<Button
    label="Focused"
    isFocused
/>

<Button
    label="Active"
    isActive
/>

<Button
    label="Disabled"
    isDisabled
/>
```

Various button variants:

```js
<Button
    label="Call to action"
    variant="call-to-action"
/>

<Button
    label="Primary"
    variant="primary"
/>

<Button
    label="Secondary"
    variant="secondary"
/>
```

Outlined button (available for all variants):

```js
<Button
    label="Outlined"
    isOutlined
/>
```

Various button (relative) sizes:

```js
<Button
    label="Size 60"
    size={60}
/>

<Button
    label="Size 70"
    size={70}
/>

<Button
    label="Size 80"
    size={80}
/>

<Button
    label="Size 90"
    size={90}
/>

<Button
    label="Default size"
/>

<Button
    label="Size 200"
    size={200}
/>
```
