import { TranscriptData } from '../types'

type Monologues = Array<
  Array<{
    ts: number
    text: string
  }>
>

export const transformTranscriptData = (data: TranscriptData): Monologues => {}
