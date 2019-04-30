const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

const { version } = require('./package.json');

module.exports = {
    title: `React Shipyard ${version ? `v${version}` : ''}`,
    pagePerSection: true,
    require: [
        path.join(__dirname, 'src/scss/main.scss'),
        path.resolve(__dirname, 'src/setup.js')
    ],
    skipComponentsWithoutExample: true,
    getComponentPathLine: (pathname) => {
        if (!isProduction) {
            return pathname;
        }
        const { name } = path.parse(pathname);
        return `import { ${name} } from 'react-shipyard';`;
    },
    theme: {
        color: {
            link: '#3185FC',
            linkHover: '#2B3847',
            baseBackground: '#fff',
            border: '#d1d5da',
            sidebarBackground: '#f6f8fa'
        }
    },
    sections: [
        {
            name: 'Overview',
            content: 'docs/Welcome.md'
        },
        {
            name: 'About',
            content: 'docs/About.md'
        },
        {
            name: 'Getting Started',
            content: 'docs/GetStarted.md'
        },
        {
            name: 'Components',
            components: './src/library/components/[A-Z]*/[A-Z]*.js'
        },
        {
            name: 'Controls',
            components: './src/library/controls/[A-Z]*/[A-Z]*.js'
        },
        {
            name: 'Layouts',
            components: './src/library/layouts/[A-Z]*/[A-Z]*.js'
        }
    ]
};
