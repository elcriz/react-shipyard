Breadcrumb example:

```js
<Breadcrumb>
    <Link to="/" title="First item">First item</Link>
    <Link to="/" title="Second item">Second item</Link>
    <Link to="/" title="Third item">Third item</Link>
    <Link to="/" title="Fourth item">Fourth item</Link>
</Breadcrumb>
```

Breadcrumb with dynamic content (see code):

```js
<Breadcrumb>
    <Link to="/" title="First item">Rendered</Link>
    {true == false && (
        <Link to="/" title="Second item">Not rendered</Link>
    )}
    <Link to="/" title="Third item">Rendered</Link>
</Breadcrumb>
```
