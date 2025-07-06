import { Modal, HStack } from '@ui'
import { useDispatch, useSelector } from 'react-redux'

import { LeftModal } from '../components/LeftModal/LeftModal'
import {
  openLeftModal,
  closeLeftModal,
  openRightModal,
  closeRightModal,
} from '../store/modalSlice'

import type { RootState } from '../store'

export function Home () {
  const dispatch = useDispatch()
  const leftOpen = useSelector((state: RootState) => state.modal.leftModalOpen)
  const rightOpen = useSelector((state: RootState) => state.modal.rightModalOpen)

  // 只要有一個 Modal 開啟就顯示 Modal
  const modalOpen = leftOpen || rightOpen

  const handleOpenAllModal = () => {
    dispatch(openLeftModal())
    dispatch(openRightModal())
  }

  return (
    <>
      <HStack padding="10px">
        <button onClick={handleOpenAllModal}>
          開啟全部 Modal
        </button>
      </HStack>
      <Modal
        open={modalOpen}
        onClose={() => {
          dispatch(closeLeftModal())
          dispatch(closeRightModal())
        }}
        leftWidth="40%"
        left={leftOpen && <LeftModal />}
        rightWidth="50%"
        right={rightOpen && (
          <div>
            <h2>右側 Modal</h2>
            <button onClick={() => dispatch(closeRightModal())}>關閉右側</button>
          </div>
        )}
        disableBackdropClick
      />
    </>
  )
}
