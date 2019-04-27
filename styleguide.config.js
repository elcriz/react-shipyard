const path = require('path');
const sections = require('./config/sections.js');

module.exports = {
    title: 'Shipyard',
    pagePerSection: true,
    require: [
        path.join(__dirname, 'src/scss/main.scss')
    ],
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
