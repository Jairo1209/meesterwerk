![Publish production](https://github.com/get-uncommon/nuxt-boilerplate/workflows/Publish%20production/badge.svg?event=push)

# nuxt-boilerplate
> Starter template for Nuxt.js with Contentful CMS

## Description
This is a boilerplate for [Nuxt.js](https://nuxtjs.org/) and [Contentful](https://www.contentful.com/) CMS projects. In this project we focus on a headless solution with Contentful. If you prefer an other CMS, it’s easy to integrate with this boilerplate.

## Installation
You can download or clone this repository. You can clone this repository to your local project folder with `git clone https://github.com/get-uncommon/nuxt-boilerplate.git`. Then check your git remote with `git remote --verbose`.

If you choose to make a new project you can add the remote to the `nuxt-boilerplate` by `git remote add [name] [branch]`.

If you don’t like this shit you can alternatively just download the repository and copy / paste it in your new project.

## Project setup
Duplicate the `sample.env` file to `.env` and configure your projects environment variables if you are in development mode:

```
BASE_URL=http://localhost:3000
ENVIRONMENT=development
SITENAME=My awesome application
NPM_TOKEN=
```

## Build setup

``` bash
# Install your dependencies with yarn
$ yarn install

# run with yarn
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
