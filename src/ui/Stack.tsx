import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import styled from 'styled-components'

interface StackProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  gap?: number | string,
  align?: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  padding?: CSSProperties['padding'],
  width?: CSSProperties['width'],
}

const StyledStack = styled.div<{
  $gap: CSSProperties['gap'],
  $direction: CSSProperties['flexDirection'],
  $align?: CSSProperties['alignItems'],
  $justify?: CSSProperties['justifyContent'],
  $padding?: CSSProperties['padding'],
  $width?: CSSProperties['width'],
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  padding: ${({ $padding }) => $padding};
  width: ${({ $width }) => $width};
`

const initialStackProps: StackProps = {
  gap: '0px',
  align: 'flex-start',
  justify: 'flex-start',
  padding: '0px',
  width: '100%',
}

export const HStack = (props: StackProps) => {
  const { gap, align, justify, padding, width, children, ...rest } = { ...initialStackProps, ...props }
  return (
    <StyledStack
      $gap={gap}
      $direction="row"
      $align={align}
      $justify={justify}
      $padding={padding}
      $width={width}
      {...rest}
    >
      {children}
    </StyledStack>
  )
}

export const VStack = (props: StackProps) => {
  const { gap, align, justify, padding, width, children, ...rest } = { ...initialStackProps, ...props }
  return (
    <StyledStack
      $gap={gap}
      $direction="column"
      $align={align}
      $justify={justify}
      $padding={padding}
      $width={width}
      {...rest}
    >
      {children}
    </StyledStack>
  )
}
