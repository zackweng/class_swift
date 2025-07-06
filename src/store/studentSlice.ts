import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Classroom, Student } from '../types/classroom'

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
    setStudentScore (state, action: PayloadAction<{ id: Student['id'], score: Student['score'] }>) {
      const { id, score } = action.payload
      state.students = state.students?.map(student => student.id === id ? { ...student, score } : student) ?? null
    },
  },
})

export const { setClassroom, setStudentScore } = studentSlice.actions
export default studentSlice.reducer
