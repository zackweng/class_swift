import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import styled from 'styled-components'

interface HStackProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  gap?: number | string,
  align?: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  padding?: CSSProperties['padding'],
}

const StyledHStack = styled.div<{
  $gap: number | string,
  $align?: CSSProperties['alignItems'],
  $justify?: CSSProperties['justifyContent'],
  $padding?: CSSProperties['padding'],
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => typeof $gap === 'number' ? `${$gap}px` : $gap};
  align-items: ${({ $align }) => $align || 'flex-start'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  padding: ${({ $padding }) => $padding || '0'};
`

export const HStack = ({
  gap = 4,
  align,
  justify,
  padding,
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
