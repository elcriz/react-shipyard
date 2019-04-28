import { Dialog } from './library/components/Dialog/Dialog';
import { Button } from './library/controls/Button/Button';
import { Link } from './library/controls/Link/Link';

if (process.env.NODE_ENV === 'development') {
    require('./scss/main.scss');
} else {
    require('./css/main.css'); // eslint-disable-line import/no-unresolved
}

export {
    Dialog,
    Button,
    Link
};
