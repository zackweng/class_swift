import type { CSSProperties } from 'react'

type Color = 'black' | 'white' | 'blue' | 'gray' | 'green' | 'red'

export const colors: Record<Color, CSSProperties['color']> = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#1890FF',
  gray: '#E0E0E0',
  green: '#4CAF50',
  red: '#F44336',
}
