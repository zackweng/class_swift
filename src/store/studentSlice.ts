import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Classroom } from '../types/classroom'

interface StudentState {
  className: Classroom['className'] | null,
  students: Classroom['students'] | null,
  id: Classroom['id'] | null,
  link: Classroom['link'] | null,
}

const initialState: StudentState = {
  className: null,
  students: null,
  id: null,
  link: null,
}

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setClassroom (state, action: PayloadAction<Classroom>) {
      state.className = action.payload.className
      state.students = action.payload.students
      state.id = action.payload.id
      state.link = action.payload.link
    },
    setClassName (state, action: PayloadAction<Classroom['className']>) {
      state.className = action.payload
    },
    setStudents (state, action: PayloadAction<Classroom['students']>) {
      state.students = action.payload
    },
  },
})

export const { setClassroom, setClassName, setStudents } = studentSlice.actions
export default studentSlice.reducer
