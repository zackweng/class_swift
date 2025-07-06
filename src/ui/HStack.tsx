import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import styled from 'styled-components'

interface HStackProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  gap?: number | string,
  align?: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  padding?: CSSProperties['padding'],
}

const StyledHStack = styled.div<{
  $gap: CSSProperties['gap'],
  $align?: CSSProperties['alignItems'],
  $justify?: CSSProperties['justifyContent'],
  $padding?: CSSProperties['padding'],
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => $gap};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  padding: ${({ $padding }) => $padding};
`

export const HStack = ({
  gap = 4,
  align = 'flex-start',
  justify = 'flex-start',
  padding = 8,
  children,
  ...rest
}: HStackProps) => (
  <StyledHStack
    $gap={gap}
    $align={align}
    $justify={justify}
    $padding={padding}
    {...rest}
  >
    {children}
  </StyledHStack>
)
