import fs from 'fs'
import test from 'ava'
import pify from 'pify'
import childProcess from 'child_process'
import pkg from './package.json'

test('gets the latest version', async t => {
  t.plan(1)

  const stdout = await pify(childProcess.execFile)('./cli.js', ['johnotander', 'github-latest-cli'])
  t.same(stdout.trim(), 'v' + pkg.version)
})
