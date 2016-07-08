#!/usr/bin/env node

'use strict'

const meow = require('meow')
const shtml = require('shtml')
const isBlank = require('is-blank')
const githubLatest = require('github-latest')

const cli = meow(shtml`
<div>
  <underline>Usage</underline><br>
    $ github-latest [user or org] [repo]<br><br>

  <underline>Example</underline><br>
    $ github-latest johnotander pixyll
</div>
`, {
  alias: {
    v: 'version',
    h: 'help'
  }
})

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
