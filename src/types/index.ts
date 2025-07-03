export interface ClassInfo {
  id: string,
  name: string,
  link: string,
}

export interface Student {
  id: string,
  name: string,
  score: number,
  isGuest: boolean,
}

export interface Group {
  id: string,
  name: string,
  members: Student[],
}

export type ModalType = 'classInfo' | 'studentList' | null

export type TabType = 'studentList' | 'groupView'
