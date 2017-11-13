const r = require('../../lib/react')
const { map } = require('redash')

const posts = [
  { title: 'Where Flux Went Wrong', href: '/blog/where-flux-went-wrong' },
  { title: 'Eradicate Runtime Errors in React with Flow', href: '/blog/eradicate-runtime-errors-in-react-with-flow' },
  { title: 'From Redux to GraphQL', href: '/blog/from-redux-to-graphql' },
  { title: 'New to JavaScript? Avoid Angular', href: '/blog/new-to-js-avoid-angular' }]

const projects = [
  { title: 'redash: Lightweight Functional Programming for JavaScript', source: 'https://github.com/davezuko/redash', href: 'https://redash.zuko.me' },
  { title: 'react-reformed: A Simpler Approach to Forms in React', source: 'https://github.com/davezuko/react-reformed', href: 'https://react-reformed.zuko.me' }]

const HomeView = () =>
  r('main', null,
    r('h1', null, 'David Zukowski'),
    r('p', null,
      'Hey there, I\'m a front-end developer currently obsessed with functional programming. I work professionally on large scale ReactJS applications, and in my free time enjoy contributing to the open source community and playing around with Clojure and Elm. Outside of work, I spend much of my time reading, playing tennis, and traveling.'),
    r('p', null,
      'In the past I have worked on enterprise AngularJS applications, and before that developed websites for clients including Hilton Worldwide, Kimberly Clark, and Smucker\'s Natural Foods.'),
    r('h2', null, 'Writing'),
    r('ul', null,
      map(({ title, href }) =>
        r('li', { key: title },
          r('a', { href: href }, title)), posts)),
    r('h2', null, 'Projects'),
    r('ul', null,
      map(({ title, href }) =>
        r('li', { key: title },
          r('a', { href: href }, title)), projects)))

module.exports = HomeView
