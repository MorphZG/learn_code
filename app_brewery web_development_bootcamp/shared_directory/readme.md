# PNPM package manager

Link to documentation: [pnpm](https://pnpm.io/)

pnpm is a package manager that saves the storage space by symlinking the shared dependencies between different projects.

## Sharing dependencies

Link working directory with shared directory

This directory stores all the shared dependencies between the projects. When starting a new project it is important to link the two directories. From the working directory run this command `pnpm link <shared_directory>` after that you can update with `pnpm update`

- `pnpm -h` - Print help
- `pnpm init` - Create a package.json file
- `pnpm link <directory path>`
- `pnpm install` - Download all the packages listed as dependencies in package.json
- `pnpm add <module name>` - Download the package and add it to the list of dependencies in package.json
- `pnpm add <module_name@version>` - Download a specific version of a package and add it to the list of dependencies in package.json
- `pnpm add -D <module_name>` - Download a package and add it to the list of dev dependencies in package.json
- `pnpm add -g <module_name>` - Download a package and install it globally
- `pnpm remove <module_name>` - Uninstall a package and remove it from the list of dependencies in package.json
- `pnpm list` - Print a tree of locally installed modules
- `pnpm list --depth=0` - Print a tree of locally installed modules
- `pnpm list -g --depth=0` - List top-level globally installed modules

#tags: readme, pnpm,