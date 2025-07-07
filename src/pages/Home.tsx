import { useEffect, useState } from 'react'

import { Modal, HStack } from '@ui'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchStudents } from '../api/fetchStudents'
import { LeftModal } from '../components/LeftModal/LeftModal'
import { LoadingModal } from '../components/LoadingModal'
import { RightModal } from '../components/RightModal/RightNodal'
import {
  openLeftModal,
  closeLeftModal,
  openRightModal,
  closeRightModal,
} from '../store/modalSlice'
import { setClassroom } from '../store/studentSlice'
import { colors } from '../styles/colors'

import type { RootState } from '../store'

const CenterButton = styled.button`
  background: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export function Home () {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const leftOpen = useSelector((state: RootState) => state.modal.leftModalOpen)
  const rightOpen = useSelector((state: RootState) => state.modal.rightModalOpen)

  const modalOpen = leftOpen || rightOpen

  const handleOpenAllModal = () => {
    dispatch(openLeftModal())
    dispatch(openRightModal())
  }

  useEffect(() => {
    if (!modalOpen) return
    setLoading(true)
    fetchStudents().then(data => {
      dispatch(setClassroom(data))
      setLoading(false)
    })
  }, [dispatch, modalOpen])

  return (
    <>
      <HStack padding="10px" style={{ justifyContent: 'center' }}>
        <CenterButton onClick={handleOpenAllModal}>
          開啟全部 Modal
        </CenterButton>
      </HStack>
      <Modal
        open={modalOpen}
        onClose={() => {
          dispatch(closeLeftModal())
          dispatch(closeRightModal())
        }}
        leftWidth="40%"
        left={loading ? <LoadingModal /> : leftOpen && <LeftModal />}
        rightWidth="50%"
        right={loading ? <LoadingModal /> : rightOpen && <RightModal />}
        disableBackdropClick
      />
    </>
  )
}
