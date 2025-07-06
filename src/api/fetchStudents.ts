import classroomData from '../data/students.json'

import type { Classroom } from '../types/classroom'

export const fetchStudents = async (): Promise<Classroom> => {
  // 模擬 API 請求延遲
  // eslint-disable-next-line promise/avoid-new
  await new Promise(resolve => setTimeout(resolve, 1000))
  return classroomData as Classroom
}
