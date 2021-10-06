export interface TranscriptData {
  monologues: Array<{
    speaker: number
    elements: Array<
      | {
          type: 'text'
          value: string
          confidence: number
          end_ts: number
          ts: number
        }
      | {
          type: 'punct'
          value: ' ' | '.' | ',' | '?'
        }
    >
  }>
}
