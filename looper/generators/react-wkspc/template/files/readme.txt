# Welcome to your Workspace

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
bit create react-component -s tiui.looper -n <your namespace> <component name>
```
Follow this naming convention for the namespace
- For components that are product specific start the namespace with the product name eg: gfi/ui/
- For components that can be used across the org, omit the product name eg ui/
- Use `ui` for building block components and `pages` when you build pages that are composed of other components. eg, login is a page component, header is a ui component.
This will create a component with hello world code. Ensure that you can see the new component on the bit web app from step #3
5. Add a story
- Follow the examples from other components in the template and create a .stories.ts file with a simple hello world story for your component
- Ensure that the stor is visible on the storybook web app.
6. Once you're done building and testing your component, **soft tag it**
```bash
bit status
bit tag <component-id> --soft -m <message>
# OR if there are multiple components to tag with the same comment.
bit tag --all --soft
```

# component-id => ui/button, pages/login etc.
# message => eg 'Added new backward compatible feature to control color' etc.
6. Commit the changes in the `.bitmap` file
7. Raise a PR. When the branch is merged the CI will publish the component to npm and bit

## Storybook

```bash
pnpm storybook
```

## Tests

```bash
pnpm test
```

## Building your components

```bash
bit build --all

# Single component
bit build providers/error-boundary
```

## Running the linter

```bash
pnpm lint # show errors and warnings
pnpm lint:q # show only errors
```

## Removing a component

```bash
bit remove <component> # e.g. bit remove ui/button

# to remove from looper
bit remove <component> --looper

## Resolving incompatibilities between bit and npm
This command gives you a list of npm packages and their versions
```bash
for i in `npm search --registry https://ti-npm.stage2.cnu-tu.ey.io --json -l --searchlimit=500 @tiui | jq '.[].name' |tr -d "\""`; do MYVAR=`npm view $i versions | sed -e "s/'/\"/g"`; echo "{ \"name\": \"$i\", \"versions\": $MYVAR },"; done
```

This command will give you a list of bit components and versions
```bash
bit list -j
```

Take the output of both and create a json as follows
`
{
  "npm": [ <npm output> ],
  "bit": [ <bit output ]
}
`

Then you can run this jsonata on it
```
$map(bit, function($x, $i) {(
    $npmname := "@tiui/" & $x.id.$substringAfter("tiui.").$replace("/", ".");
    $npmversions := $.npm[name=$npmname].versions;
    {
        "npm_name": $npmname,
        "npm_latest_version": $npmversions[-1],
        "bit_version": $x.currentVersion,
        "bit_local_version": $x.localVersion,
        "unpublish_command": ($not($x.$npmversions[-1] = $x.currentVersion)) ? "npm unpublish " & $npmname & "@" & $npmversions[-1]
    };
)})
```

For components where the npm version is higher than the bit version, use the unpublish command to delete it from npm.
You can get all the unpublish commands in one list by appending `.unpublish_command` to that jsonata function above.
