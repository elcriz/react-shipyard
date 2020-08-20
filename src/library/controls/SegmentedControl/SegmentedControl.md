SegmentedControl example:

```js
<SegmentedControl
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value='Option A'
    onChange={(selectedValue) => {
        console.log('Segmented control value got changed!', selectedValue);
    }}
/>
```

SegmentedControl with key-value pair options (provided as prop `options`, see code):

```js
<SegmentedControl
    label="This is a label"
    options={[
        { 'A': 'Option A' },
        { 'B': 'Option B' },
        { 'C': 'Option C' }
    ]}
    value='A'
    onChange={(selectedValue) => {
        console.log('Segmented control value got changed!', selectedValue);
    }}
/>
```

SegmentedControl with multiple, selectable options (with a `value` prop provided as an (empty) array ,see code):

```js
<SegmentedControl
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value={['Option A', 'Option C']}
/>
```

Inline SegmentedControl:

```js
<SegmentedControl
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value='Option A'
    isInline
/>
```

SegmentedControl in smaller size:

```js
<SegmentedControl
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value='Option A'
    isSmall
/>
```

Inline SegmentedControl in smaller size:

```js
<SegmentedControl
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value='Option A'
    isInline
    isSmall
/>
```
