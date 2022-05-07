# Welcome to your BitGen Workspace

This workspace uses [Bit](https://bit.dev/) to manage component packaging and distribution and [Storybook](https://storybook.js.org/) for tooling around component testing.

1. Install Bit CLI. If you are using DevSpaces this should happen automatically

```bash
npm i -g @teambit/bvm && bvm install && export PATH=$HOME/bin:$PATH
```

2. Import the components from the looper scope
```bash
bit import
bit install
bit compile
bit link
```

3. Start the bit server and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```

4. Creating your first component. Create a new branch, and then
```bash
bit create react-story -s <your-scope> -n <your namespace> <component name>

5. Create your app with s3 deployment.
```bash
bit create app-with-s3 -s <your-scope> -n <your namespace> <app name>
```

```bash
bit status
bit tag <component-id> --soft -m <message>

# component-id => ui/button, pages/login etc.
# message => eg 'Added new backward compatible feature to control color' etc.

# OR if there are multiple components to tag with the same comment.
bit tag --all --soft
```

6. Commit the changes in the `.bitmap` file.

7. Raise a PR. When the branch is merged the CI will publish the component to npm and bit

## Storybook

```bash
pnpm storybook
```

## Tests

```bash
pnpm test
```

## Linting and Formatting

The newly created bit workspace comes with a linter and formatter.

You can run lint in two modes - lint and lint:quiet (disable reporting on warnings)

```shell
pnpm lint
```

```shell
pnpm lint:quiet
```

You can run format in two modes - format and format:check

```shell
pnpm format
```

```shell
pnpm format:check
```

The linter and formatter are versioned and is pointing to latest. So, any time there is a central update to these versions, bit install should automatically update the linter and formatter.
