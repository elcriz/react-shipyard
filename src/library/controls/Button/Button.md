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

Various button types:

```js
<Button
    label="Call to action"
    type="call-to-action"
/>

<Button
    label="Primary"
    type="primary"
/>

<Button
    label="Secondary"
    type="secondary"
/>
```

Outlined button (available for all types):

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