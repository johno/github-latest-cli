import fs from 'fs'
import test from 'ava'
import pify from 'pify'
import childProcess from 'child_process'

const expected = fs.readFileSync('expected.html', 'utf8')
const fixtureFile = 'fixture.html'
const outputFile = 'output.html'

test('strips html comments', async t => {
  t.plan(1)

  const stdout = await pify(childProcess.execFile)('./cli.js', [fixtureFile])
  t.same(stdout, expected)
})

test('writes to a file when provided', async t => {
  t.plan(1)

  await pify(childProcess.execFile)('./cli.js', [fixtureFile, outputFile])
  const output = fs.readFileSync(outputFile, 'utf8')

  t.same(output, expected)
})
