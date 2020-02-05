import Breadcrumb from './library/components/Breadcrumb/Breadcrumb';
import ButtonGroup from './library/components/ButtonGroup/ButtonGroup';
import Dialog from './library/components/Dialog/Dialog';
import Button from './library/controls/Button/Button';
import DropDownMenu from './library/controls/DropDownMenu/DropDownMenu';
import Link from './library/controls/Link/Link';
import SegmentedControl from './library/controls/SegmentedControl/SegmentedControl';
import TextInput from './library/controls/TextInput/TextInput';

if (process.env.NODE_ENV === 'development') {
    require('./scss/main.scss');
} else {
    require('./css/main.css'); // eslint-disable-line import/no-unresolved
}

export {
    Breadcrumb,
    ButtonGroup,
    Dialog,
    Button,
    DropDownMenu,
    Link,
    SegmentedControl,
    TextInput
};
