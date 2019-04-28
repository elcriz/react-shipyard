### Installation

[![Version](https://img.shields.io/npm/v/react-shipyard.svg?style=flat-square)](https://www.npmjs.com/package/react-shipyard)

Install from NPM:

```bash
npm install --save-dev react-shipyard
```

Install `node-sass` in order to use the SASS variables:

```bash
npm install --save-dev node-sass
```

### Usage

Import it into your code:

```javascript static
import { Dialog } from 'react-shipyard';

const Example = () => (
    <Dialog type="success">
        <p>Installation was successful!</p>
    </Dialog>
);
```

### Using the library without React

This collection contains ready to use React components which are easy to implement in your own React projects. However, since all of the components are rendered with semantically correct, BEM named (in terms of the CSS classnames ) elements in them, you can also use the BEM components in your 'regular HTML' projects. Just point to the main stylesheet (`main.css`) and you are ready to go. I aim to add 'regular HTML' code examples to these docs as well, so please bear with me.

### Repository

You can find Shipyard's repository on GitHub: https://github.com/elcriz/react-shipyard.
