module.exports = [
    {
        name: 'Overview',
        content: 'src/docs/Welcome.md'
    },
    {
        name: 'About',
        content: 'src/docs/About.md'
    },
    {
        name: 'Getting Started',
        content: 'src/docs/GetStarted.md'
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
];
