import { fixture } from './transform.test.data'
import { transformTranscriptData } from './transform'

it('should', () => {
  expect(transformTranscriptData(fixture)).toEqual([
    [
      {
        text: 'Me?',
        ts: 78.11,
      },
      {
        text: 'I can hear you.',
        ts: 79.07,
      },
      {
        text: 'Can you hear me ',
        ts: 79.56,
      },
    ],
  ])
})
