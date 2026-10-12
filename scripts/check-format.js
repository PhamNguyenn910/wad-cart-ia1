
import { readFileSync } from 'node:fs'

const files = [
  'src/cart.js',
  'test/cart.test.js',
  'scripts/check-format.js'
]

let hasErrors = false

for (const file of files) {
  const content = readFileSync(file, 'utf8')
  const lines = content.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (/[ \t]+$/.test(line)) {
      console.error(`${file}:${i + 1} - Trailing whitespace`)
      hasErrors = true
    }

    if (line.includes('\t')) {
      console.error(`${file}:${i + 1} - Tab character found`)
      hasErrors = true
    }
  }

  if (content.includes('\r')) {
    console.error(`${file} - Use LF line endings`)
    hasErrors = true
  }

  if (!content.endsWith('\n')) {
    console.error(`${file} - Missing final newline`)
    hasErrors = true
  }
}

if (hasErrors) {
  console.error('Format check failed.')
  process.exitCode = 1
} else {
  console.log('Format check passed.')
}
