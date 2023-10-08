# PNPM package manager

Link to documentation: [pnpm](https://pnpm.io/)

pnpm is a package manager that saves the storage space by symlinking the shared dependencies between different projects.

## Sharing dependencies

Link working directory with shared directory

This directory stores all the shared dependencies between the projects. When starting a new project it is important to link the two directories. From the working directory run this command `pnpm link <shared_directory>` after that you can update with `pnpm update`

Installing and adding dependencies

Add or install new dependency with `pnpm add <dependency>` or `pnpm install <dependency>`
