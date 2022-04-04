# BitGen

To create a new workspace with this template, run the following command:

```shell
bit new react-wkspc <new-workspace-name> --aspect ashwanth1109.looper/react-wkspc

# local debugging only
bit new react-wkspc <new-workspace-name> --aspect ashwanth1109.looper/react-wkspc --load-from <path-to-root-of-workspace>
```

Your newly created workspace has the `tiui component template` available out of the box.
You can see this template using the following command:
```shell
bit templates
# You should see "tiui-component (TI UI component template)" in the list
```

To create a new react component using the TI UI standard, run the following command:
```shell
bit create tiui-component ui/button
```

To tag a component,

```shell
bit tag --all --soft --message "add dummy component with env"

# CICD will persist these changes for you, using the command:
# bit tag --persist
# CICD also exports these components with: bit export
# And then commits the .bitmap to the repo
```

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.

- **.gitignore**

Ignoring any files from version control
