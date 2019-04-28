module.exports = [
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
];
