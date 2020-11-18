# My Marvel

[![main](https://github.com/jmagrippis/my-marvel/workflows/main/badge.svg)](https://github.com/jmagrippis/my-marvel/actions)
[![E2E](https://github.com/jmagrippis/my-marvel/workflows/E2E/badge.svg)](https://github.com/jmagrippis/my-marvel/actions)

An app to query the [Marvel API] for your favourite events and characters!

[marvel api]: https://developer.marvel.com/ "The world's greatest comic API"

## Live Site

You can view the result of all this code at
[my-marvel.vercel.app](https://my-marvel.vercel.app).

## Notable tech used

- [React]
- [NextJS]

[react]: https://facebook.github.io/react/ "It's kind of a big deal"
[nextjs]: https://nextjs.org/ 'Isomorphic React framework'

## Running locally

### Prep

You will need a version of Node installed: it is recommended to use [nvm] for hassle-free node version management.

[Yarn v1] is recommended for installing this project's dependencies. [npm] which would have been installed alongside node should work almost just as well.

Assuming you went with yarn, go to the root of the project and run:

```sh
yarn
```

... and everything you need to run this project and its tests will be downloaded for you. Prep complete!

[nvm]: https://github.com/nvm-sh/nvm 'bash script to manage multiple active node.js versions'
[yarn v1]: https://classic.yarnpkg.com/en/docs/install 'because they dropped the ball with v2'
[npm]: https://www.npmjs.com/ 'it once was THE javascript package manager'

### Starting the dev server

If you clone this project and go to the root directory, running:

```sh
yarn dev
```

Will spin up the dev server, running on port 3600.

### Running tests

Regardless if you’ve got the server running, the following command will start the test runner:

```sh
yarn test --watch
```

Tests will rerun when any code changes.

The testing framework of choice is [Jest] and [React Testing Library] is also setup, and heavily recommended for the UI testing.

[jest]: https://jestjs.io/ 'testing framework with a focus on simplicity'
[react testing library]: https://testing-library.com/ 'testing utilities that encourage good testing practices'

### Running e2e tests

For these you **will** need the server running at http://localhost:3600/.

We're using [Cypress] to ensure the app "actually works"™ in production, and to follow BDD with responsive-design and accessibility in mind.

Responsive design especially, is tricky to meaningfully test using the Jest tests from the previous section. In contrast, edge-cases, mutating / destructive scenarios are trickier to test e2e and it's where the Jest tests shine!

My blogpost on [BDD and E2E testing a responsive web app] sums up how we've set up all of this config during our live-streams on [Twitch] 🙂

In any case, to develop the app with the tests running side-by-side the browser using the Cypress Dashboard, run:

```sh
yarn bdd
```

Our automated tests are defined in `.github/workflows/e2e.yml` and they essentially run the following command, only visiting the deployment url instead of the local server:

```sh
yarn e2e
```

[cypress]: https://www.cypress.io/ 'Fast, easy and reliable testing for anything that runs in a browser'
[bdd and e2e testing a responsive web app]: https://magrippis.com/blog/2020/how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress 'How to BDD and E2E test your responsive web app with Cypress'
[twitch]: https://www.twitch.tv/jmagrippis 'What app will we be building when you visit?'

### License

For learning purposes, this repo is licensed under the [MIT license].

[mit license]: http://opensource.org/licenses/MIT "Everyone's favourite license"
