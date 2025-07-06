import type { CSSProperties } from 'react'

type Color = 'black' | 'white' | 'blue' | 'grayLight' | 'grayDark' | 'green' | 'red'

export const colors: Record<Color, CSSProperties['color']> = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#1890FF',
  grayLight: '#F5F5F5',
  grayDark: '#D1D1D1',
  green: '#4CAF50',
  red: '#F44336',
}
