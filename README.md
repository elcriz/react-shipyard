# React Shipyard

[![Version](https://img.shields.io/npm/v/react-shipyard.svg?style=flat-square)](https://www.npmjs.com/package/react-shipyard)

Shipyard is a collection of ready to use, accessible, semantically correct React components.

All components in this collection were designed with the following in mind. They must be:

1. Accessible and usable in all browsers and on all devices, no matter the controls
2. Semantically correct, respecting web standards
3. Styled using the BEM naming convention
4. Easily customizable with own props and styling
5. Fully documented, with styling guidelines

## Installation

Install from NPM:

```bash
npm install --save-dev react-shipyard
```

## Usage

Import it into your code:

```javascript static
import { Dialog } from 'react-shipyard';

const Example = () => (
    <Dialog type="success">
        <p>Installation was successful!</p>
    </Dialog>
)
```

## Documentation

See http://christiaanhemerik.com/react-shipyard.
