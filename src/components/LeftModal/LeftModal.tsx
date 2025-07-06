import { VStack, HStack, Text } from '@ui'
import QRCode from 'react-qr-code'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { closeLeftModal } from '../../store/modalSlice'
import { colors } from '../../styles/colors'
import { CloseIcon } from '../CloseIcon'
import { Left } from '../icons/Icons'

import { CopyField } from './CopyField'

import type { RootState } from 'src/store'

const ModalContent = styled.div`
  position: relative;
  min-height: 300px;
  padding: 24px 32px;
  background-color: ${colors.grayLight};
  border-radius: 24px;
`

export const LeftModal = () => {
  const { className, id, link } = useSelector((state: RootState) => state.student)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeLeftModal())
  }

  return (
    <ModalContent>
      <CloseIcon onClick={handleClose} />
      <VStack gap="16px">
        <HStack gap="8px" align="center" style={{ cursor: 'pointer' }}>
          <Left width={12} height={12} />
          <Text fontSize="12px" fontWeight={700}>Back to Class List</Text>
        </HStack>
        <Text fontSize="24px" fontWeight={700}>{`Join ${className}`}</Text>
        <HStack gap="32px" align="center">
          <CopyField label="ID: X58E9647" text={`ID: ${id}`} />
          <CopyField label="Link" text={link ?? ''} />
        </HStack>
        <VStack gap="12px" align="center">
          <QRCode value="https://www.classswift.viewsonic.io/" style={{ width: '80%', height: 'auto' }} title="Class Swift" />
          <Text fontSize="12px" fontWeight={700}>version 1.1.7</Text>
        </VStack>
      </VStack>
    </ModalContent>
  )
}
