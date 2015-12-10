#!/usr/bin/env node

'use strict'

const meow = require('meow')
const isBlank = require('is-blank')
const githubLatest = require('github-latest')

const cli = meow(`
  Usage
    $ github-latest <user or org> <repo>

  Example
    $ github-latest johnotander pixyll
`)

const userOrOrg = cli.input[0]
const repoName = cli.input[1]

if (isBlank(userOrOrg) || isBlank(repoName)) {
  console.log(cli.help)
  process.exit(1)
}

githubLatest(userOrOrg, repoName, (err, tag) => {
  if (err) {
    console.log('github-latest encountered a problem')
    console.log(err)
    process.exit(1)
  }

  console.log(tag)
  process.exit(0)
})
