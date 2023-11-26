import { Selector } from 'testcafe';

// eslint-disable-next-line no-undef
fixture('Getting Started')
    .page('http://localhost:5173/');

test('TV show app - romesh, testing...', async t => {
    await t
        .typeText('#search', 'The Flash')
        .wait(3000)
        .click(Selector('[class="carousel__item"]'))
        .wait(3000)
        .expect(Selector('[class="carousel__item"]').innerText).eql('The Flash');
});

test('TV show app - romesh, testing genre filter click', async t => {
    await t
        .wait(3000)
        .click(Selector('button').withText('Adventure'))
        .wait(3000)
        .click(Selector('button').withText('Romance'))
        .wait(3000)
        .click(Selector('button').withText('Drama'))
        .wait(2000)
        .expect(Selector('button').withText('Action').innerText).eql('Action');
});