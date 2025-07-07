import { Text, VStack } from '@ui'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { setStudentScore } from '../../store/studentSlice'
import { colors } from '../../styles/colors'

import { SingleStudent } from './SingleStudent'

import type { Group } from '../../types/classroom'
import type { RootState } from 'src/store'

const GroupContainer = styled.div`
  width: 100%;
  max-width: 700px;
  max-height: 480px;
  overflow: auto;
`

const GroupSection = styled(VStack)`
  margin-bottom: 24px;
`

const GroupTitle = styled(Text)`
  padding: 8px 0;
  border-bottom: 2px solid ${colors.grayDark};
  font-size: 20px;
  font-weight: 700;
  width: 100%;
`

const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  width: 100%;
`

export const StudentGroup = () => {
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

  const emptyGroups: Record<Group, typeof students> = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
  }

  const groupedStudents: Record<Group, typeof students> = students?.reduce((acc, student) => {
    acc[student.group]?.push(student)
    return acc
  }, emptyGroups) || emptyGroups

  const groupOrder: Group[] = ['A', 'B', 'C', 'D', 'E']

  return (
    <VStack align="center" justify="center">
      <GroupContainer>
        {groupOrder.map((group) => {
          const groupStudents = groupedStudents[group]
          if (!groupStudents || groupStudents.length === 0) return null
          return (
            <GroupSection key={group} gap="16px">
              <GroupTitle fontSize="20px" fontWeight={700}>{`Group ${group}`}</GroupTitle>
              <StudentGrid>
                {groupStudents.map((student) => (
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
            </GroupSection>
          )
        })}
      </GroupContainer>
    </VStack>
  )
}
