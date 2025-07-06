import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import { styled } from 'styled-components'

import { colors } from '../styles/colors'

interface TextProps extends PropsWithChildren<HTMLAttributes<HTMLSpanElement>> {
  fontSize?: CSSProperties['fontSize'],
  fontWeight?: CSSProperties['fontWeight'],
  color?: CSSProperties['color'],
}

const StyledText = styled.span<{
  $fontSize?: CSSProperties['fontSize'],
  $fontWeight?: CSSProperties['fontWeight'],
  $color?: CSSProperties['color'],
}>`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color }) => $color};
`

export const Text = ({
  fontSize = '16px',
  fontWeight = 500,
  color = colors.black,
  children,
  ...rest
}: TextProps) => (
  <StyledText
    $fontSize={fontSize}
    $fontWeight={fontWeight}
    $color={color}
    {...rest}
  >
    {children}
  </StyledText>
)
