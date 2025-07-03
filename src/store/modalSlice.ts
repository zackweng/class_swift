import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  leftModalOpen: boolean,
  rightModalOpen: boolean,
}

const initialState: ModalState = {
  leftModalOpen: false,
  rightModalOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLeftModal: (state) => { state.leftModalOpen = true },
    closeLeftModal: (state) => { state.leftModalOpen = false },
    openRightModal: (state) => { state.rightModalOpen = true },
    closeRightModal: (state) => { state.rightModalOpen = false },
  },
})

export const {
  openLeftModal,
  closeLeftModal,
  openRightModal,
  closeRightModal,
} = modalSlice.actions

export default modalSlice.reducer
