import Dialog from './library/components/Dialog/Dialog';
import Button from './library/controls/Button/Button';
import Link from './library/controls/Link/Link';

if (process.env.NODE_ENV === 'production') {
    require('./css/main.css');
} else {
    require('./scss/main.scss');
}

export {
    Dialog,
    Button,
    Link
};
