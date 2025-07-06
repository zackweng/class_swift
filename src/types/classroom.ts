export type Group = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Student {
  id: number,
  name: string,
  score: number,
  enabled: boolean,
  group: Group,
}

export interface Classroom {
  className: string,
  id: string,
  link: string,
  students: Student[],
}
