import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import styled from 'styled-components'

interface VStackProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  gap?: number | string,
  align?: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  padding?: CSSProperties['padding'],
}

const StyledVStack = styled.div<{
  $gap: CSSProperties['gap'],
  $align?: CSSProperties['alignItems'],
  $justify?: CSSProperties['justifyContent'],
  $padding?: CSSProperties['padding'],
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  padding: ${({ $padding }) => $padding};
`

export const VStack = ({
  gap = 4,
  align = 'flex-start',
  justify = 'flex-start',
  padding = 8,
  children,
  ...rest
}: VStackProps) => (
  <StyledVStack
    $gap={gap}
    $align={align}
    $justify={justify}
    $padding={padding}
    {...rest}
  >
    {children}
  </StyledVStack>
)
