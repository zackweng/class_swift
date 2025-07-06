import { HStack, Tabs, Text, VStack } from '@ui'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { closeRightModal } from '../../store/modalSlice'
import { colors } from '../../styles/colors'
import { CloseIcon } from '../CloseIcon'
import { Person } from '../icons/Icons'

import { StudentList } from './StudentList'

import type { RootState } from 'src/store'

const ModalContent = styled.div`
  position: relative;
  min-height: 100%;
  background-color: ${colors.grayLight};
  height: 100%;
  width: 100%;
  border-radius: 24px;
`

export const RightModal = () => {
  const { className, students } = useSelector((state: RootState) => state.student)
  const dispatch = useDispatch()

  const totalStudents = students?.length ?? 0
  const enabledStudents = students?.filter(student => student.enabled).length ?? 0

  const handleClose = () => {
    dispatch(closeRightModal())
  }

  return (
    <ModalContent>
      <CloseIcon onClick={handleClose} />
      <VStack gap="16px">
        <HStack align="center" padding="32px 0 0 16px" gap="16px">
          <Text fontSize="24px" fontWeight={700}>{className}</Text>
          <HStack gap="4px" align="center" width="fit-content">
            <Person width={16} height={16} />
            <Text fontSize="16px" fontWeight={700}>{`${enabledStudents}/${totalStudents}`}</Text>
          </HStack>
        </HStack>
        <Tabs
          tabList={[
            { label: 'Student List' },
            { label: 'Group' },
          ]}
          control={<div>Control</div>}
        >
          <StudentList />
          <div>Group</div>
        </Tabs>
      </VStack>
    </ModalContent>
  )
}
