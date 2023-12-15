# React-Peel Contributing Guide

Hi! We're really excited that you are interested in contributing to React-Peel. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Pull Request Guidelines](#pull-request-guidelines)

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Write clear and descriptive commit messages following these guidelines:

  - Use the imperative mood (e.g., "Fix bug" instead of "Fixed bug" or "Fixes bug").

  - Keep messages concise but informative, summarizing the purpose of the commit.

  - Reference relevant issues using keywords like "Closes," "Fixes," or "Resolves" with the issue number (e.g., "Closes #123").

## Development Setup

You will need [yarn](https://yarnpkg.com)

After cloning the repo, run:

```sh
# install the dependencies of the project
$ yarn install
```

### Setup React-Peel Dev Environment

The easiest way to start testing out react-peel is to run local dev environment with `yarn dev`.

```sh
$ yarn dev
```

After executing the above command, visit http://localhost:5173 and try modifying `main.tsx` code. You'll get live update.

To work with the documentation site in the development environment, run:

```sh
$ yarn dev:docs
```

This will provide you with a live environment for the documentation site, allowing you to make changes and see the results in real-time.
