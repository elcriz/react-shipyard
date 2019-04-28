Text input example:

```js
<TextInput />
```

Text input with placeholder value:

```js
<TextInput
    placeholder="Please enter something..."
/>
```

Text input with default value:

```js
<TextInput
    value="This is the value"
/>
```

Various text input states:

```js
<TextInput
    placeholder="This is valid..."
    isValid
/>

<TextInput
    placeholder="This is invalid..."
    isValid={false}
/>
```

Multiline text input example:

```js
<TextInput
    placeholder="This text input is multiline..."
    isMultiline
/>
```
