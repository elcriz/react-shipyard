const path = require('path');
const sections = require('./_config/sections.js');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    title: 'Shipyard',
    pagePerSection: true,
    require: [
        path.join(__dirname, 'src/scss/main.scss')
    ],
    getComponentPathLine: (pathname) => {
        if (!isProduction) {
            return pathname;
        }
        const { name } = path.parse(pathname);
        return `import { ${name} } from 'react-shipyard';`;
    },
    sections,
    theme: {
        color: {
            link: '#049ccf',
            linkHover: '#2B3847',
            baseBackground: '#fff',
            border: '#d1d5da',
            sidebarBackground: '#f6f8fa'
        }
    }
};
