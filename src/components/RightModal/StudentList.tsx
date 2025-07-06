import { VStack } from '@ui'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { setStudentScore } from '../../store/studentSlice'

import { SingleStudent } from './SingleStudent'

import type { RootState } from 'src/store'

const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 480px;
  overflow: auto;
`

export const StudentList = () => {
  const { students } = useSelector((state: RootState) => state.student)
  const dispatch = useDispatch()

  const handleAdd = (id: number, score: number) => {
    if (score >= 100) return
    dispatch(setStudentScore({ id, score: score + 1 }))
  }
  const handleSub = (id: number, score: number) => {
    if (score <= 0) return
    dispatch(setStudentScore({ id, score: score - 1 }))
  }

  return (
    <VStack align="center" justify="center">
      <StudentGrid>
        {students?.map((student) => (
          <SingleStudent
            key={student.id}
            id={student.id}
            name={student.name}
            score={student.score}
            enabled={student.enabled}
            leftButtonDisabled={student.score <= 0 || !student.enabled}
            rightButtonDisabled={student.score >= 100 || !student.enabled}
            onAdd={() => handleAdd(student.id, student.score)}
            onSub={() => handleSub(student.id, student.score)}
          />
        ))}
      </StudentGrid>
    </VStack>
  )
}
