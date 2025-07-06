import { VStack, HStack, Text } from '@ui'
import QRCode from 'react-qr-code'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { closeLeftModal } from '../../store/modalSlice'
import { Close, Left } from '../icons/Icons'

import { CopyField } from './CopyField'

const CloseIcon = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  cursor: pointer;
  border: none;
`

const ModalContent = styled.div`
  position: relative;
  min-height: 300px;
  padding: 24px 32px;
`

export const LeftModal = () => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeLeftModal())
  }

  return (
    <ModalContent>
      <CloseIcon onClick={handleClose} aria-label="Close">
        <Close width={36} height={36} />
      </CloseIcon>
      <VStack gap="16px">
        <HStack gap="8px" align="center" style={{ cursor: 'pointer' }}>
          <Left width={12} height={12} />
          <Text fontSize="12px" fontWeight={700}>Back to Class List</Text>
        </HStack>
        <Text fontSize="24px" fontWeight={700}>Join 302 Science</Text>
        <HStack gap="32px" align="center">
          <CopyField label="ID: X58E9647" text="X58E9647" />
          <CopyField label="Link" text="https://www.classswift.viewsonic.io/" />
        </HStack>
        <VStack gap="12px" align="center">
          <QRCode value="https://www.classswift.viewsonic.io/" style={{ width: '80%', height: 'auto' }} title="Class Swift" />
          <Text fontSize="12px" fontWeight={700}>version 1.1.7</Text>
        </VStack>
      </VStack>
    </ModalContent>
  )
}
