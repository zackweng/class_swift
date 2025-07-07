import { useState } from 'react'

import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { HStack } from '../../ui'
import { Text } from '../../ui/Text'
import { copyText } from '../../utils/copyText'
import { Duplicate, Check } from '../icons/Icons'

const DuplicateButton = styled.button`
  background: ${colors.blue};
  border: none;
  border-radius: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

interface CopyFieldProps {
  label: string,
  text: string,
}

export const CopyField = ({ label, text }: CopyFieldProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = async () => {
    await copyText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }
  return (
    <HStack gap="8px" width="fit-content">
      <Text fontSize="16px" fontWeight={700}>{label}</Text>
      <DuplicateButton onClick={handleCopy}>
        {isCopied ? <Check width={16} height={16} /> : <Duplicate width={16} height={16} />}
      </DuplicateButton>
    </HStack>
  )
}
