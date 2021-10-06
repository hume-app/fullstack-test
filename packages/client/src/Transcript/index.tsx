import React, { useEffect, useState } from 'react'
import { Box, Flex, VStack } from '@chakra-ui/react'
import { transformTranscriptData } from './helpers/transform'
import { TranscriptData } from './types'

const Transcript = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/transcript')
      .then(async (resp) => {
        const j = await resp.json()

        setData(j)
      })
      .catch(console.log)
  }, [])

  const monologies = transformTranscriptData(data)

  const setCurrentTime = (seekTime: number) => {}

  return (
    <Flex direction="column">
      <audio controls>
        <track kind="captions" />
        <source type="audio/m4a" />
        Your browser does not support the <code>audio</code> element.
      </audio>

      <Flex>
        <VStack>
          {monologues?.map((speaker, index) => (
            <Box key={index} as="p">
              {speaker.map((entry, index2) => (
                <Box
                  key={index2}
                  as="span"
                  px={1}
                  rounded={4}
                  _hover={{ bgColor: 'blue.300' }}
                  onClick={() => setCurrentTime(entry.ts)}
                >
                  {entry.text}
                </Box>
              ))}
            </Box>
          ))}
        </VStack>
      </Flex>
    </Flex>
  )
}

// eslint-disable-next-line import/no-default-export
export default Transcript
