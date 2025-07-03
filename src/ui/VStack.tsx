import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import styled from 'styled-components'

interface VStackProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  gap?: number | string,
  align?: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  padding?: CSSProperties['padding'],
}

const StyledVStack = styled.div<{
  $gap: number | string,
  $align?: CSSProperties['alignItems'],
  $justify?: CSSProperties['justifyContent'],
  $padding?: CSSProperties['padding'],
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => typeof $gap === 'number' ? `${$gap}px` : $gap};
  align-items: ${({ $align }) => $align || 'flex-start'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  padding: ${({ $padding }) => $padding || '0'};
`

export const VStack = ({
  gap = 4,
  align,
  justify,
  padding,
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
