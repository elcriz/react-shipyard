Dropdown menu example:

```js
<DropDownMenu
    options={[
        { key: 'Option 1', value: 'A' },
        { key: 'Option 2', value: 'B' },
        { key: 'Option 3', value: 'C' }
    ]}
/>
```
Disabled dropdown menu:

```js
<DropDownMenu
    options={[
        { key: 'Option 1', value: 'A' },
        { key: 'Option 2', value: 'B' },
        { key: 'Option 3', value: 'C' }
    ]}
    isDisabled
/>
```

Dropdown menu with limited maximum width (`70`):

```js
<DropDownMenu
    options={[
        { key: 'Option 1', value: 'A' },
        { key: 'Option 2', value: 'B' },
        { key: 'Option 3', value: 'C' }
    ]}
    maxWidth={70}
/>
```