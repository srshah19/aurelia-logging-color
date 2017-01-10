import test from 'ava'
import * as style from 'ansi-styles'

import { Ansi16mBrush } from './Ansi16mBrush'

test('background', t => {
  const brush = new Ansi16mBrush({ maxColor: 10 })

  let actual: string[] = []
  for (let i = 0; i <= 10; i++) {
    actual.push(brush.paint(i.toString()))
  }
  console.log.apply(console, actual)

  t.deepEqual(actual, ['\u001b[48;2;150;0;90m0\u001b[49m', '\u001b[48;2;0;0;200m1\u001b[49m', '\u001b[48;2;0;18;255m2\u001b[49m', '\u001b[48;2;0;18;255m3\u001b[49m', '\u001b[48;2;0;106;255m4\u001b[49m', '\u001b[48;2;44;179;150m5\u001b[49m', '\u001b[48;2;151;179;0m6\u001b[49m', '\u001b[48;2;255;164;0m7\u001b[49m', '\u001b[48;2;255;164;0m8\u001b[49m', '\u001b[48;2;255;78;0m9\u001b[49m', '\u001b[48;2;150;0;90m10\u001b[49m']);
})

test('text', t => {
  const brush = new Ansi16mBrush({ maxColor: 10, coloringText: true })
  let actual: string[] = []
  for (let i = 0; i <= 10; i++) {
    actual.push(brush.paint(i.toString()))
  }
  console.log.apply(console, actual)

  t.deepEqual(actual, ['\u001b[38;2;150;0;90m0\u001b[39m', '\u001b[38;2;0;0;200m1\u001b[39m', '\u001b[38;2;0;25;255m2\u001b[39m', '\u001b[38;2;0;25;255m3\u001b[39m', '\u001b[38;2;0;152;255m4\u001b[39m', '\u001b[38;2;44;255;150m5\u001b[39m', '\u001b[38;2;151;255;0m6\u001b[39m', '\u001b[38;2;255;234;0m7\u001b[39m', '\u001b[38;2;255;234;0m8\u001b[39m', '\u001b[38;2;255;111;0m9\u001b[39m', '\u001b[38;2;150;0;90m10\u001b[39m']);
})
