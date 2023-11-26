// eslint-disable-next-line no-undef
fixture('Getting Started')
    .page('http://localhost:5173/');

test('TV show app - romesh, testing...', async t => {
    await t
        .typeText('#developer-name', 'Romesh Kumar')
});