# Blueprint Components

The missing components for [Blueprint](http://blueprintjs.com/).

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Travis](https://img.shields.io/travis/Landish/blueprint-components.svg)](https://travis-ci.org/Landish/blueprint-components)
[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-brightgreen.svg)](https://github.com/facebook/jest)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/Landish/blueprint-components.svg)](https://github.com/Landish/blueprint-components/blob/master/LICENSE)


## Getting Started

Install Blueprint Components

```shell
yarn add blueprint-components
```

Add specific component to your project:

```js
import { ButtonGroup, Label, Navbar, ... } from 'blueprint-components';
```

### Avalaible Components:

* [Button Group](https://landish.github.io/blueprint-components/#buttongroup)
* [Callout](https://landish.github.io/blueprint-components/#callout)
* [Card](https://landish.github.io/blueprint-components/#card)
* [Control Group](https://landish.github.io/blueprint-components/#controlgroup)
* [File Input](https://landish.github.io/blueprint-components/#fileinput)
* [Form Group](https://landish.github.io/blueprint-components/#formgroup)
* [Label](https://landish.github.io/blueprint-components/#label)
* [Navbar](https://landish.github.io/blueprint-components/#navbar)

## Contirbution

PR's are welcome. If you found a bug, typo, or just want to add new features or examples to docs, feel free to make a pull request. 

```shell
git clone git@github.com:Landish/blueprint-components.git
cd blueprint-components
yarn
```

Once you've forked/cloned the repo, you can fix the bug, or add new feature.

If you need to open docs on local machine, run the following command:

```shell
yarn docs
```

Then visit [http://localhost:6060/](http://localhost:6060/)

If you need to check the tests, run the command:

```shell
yarn test
# Or run the tests in `watch` mode
yarn test:watch
```

After you've made your changes, add files to git stage with `git add <file(s)>` and then run the following command instead of `git commit -m "your message"`:

```shell
yarn cz
```

It will prompt few questions from [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog). After you answer them correctly, you're ready to make a pull request.

> Note: Don't worry about formatting the code, [prettier](https://github.com/prettier/prettier) will do it for you with `precommit` hook, thanks to [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).


## Licence

The Blueprint Components package is licensed under [MIT License](https://github.com/Landish/blueprint-components/blob/master/LICENSE).

> Note: [Blueprint](http://blueprintjs.com/) itself is licensed under [BSD](https://github.com/palantir/blueprint/blob/master/LICENSE).
