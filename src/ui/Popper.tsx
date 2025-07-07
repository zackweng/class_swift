import { useEffect, useRef, type ReactNode, type ComponentPropsWithoutRef } from 'react'

import { createPopper, type Placement } from '@popperjs/core'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

export interface PopperProps extends ComponentPropsWithoutRef<'div'> {
  anchorEl?: HTMLElement | null,
  children?: ReactNode,
  disablePortal?: boolean,
  open?: boolean,
  placement?: Placement,
  offset?: [number, number],
}

const StyledPopper = styled.div`
  z-index: 1400;
`

export const Popper = ({
  anchorEl,
  children,
  disablePortal = false,
  open = false,
  placement = 'bottom',
  offset = [0, 8],
  ...rest
}: PopperProps) => {
  const popperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!popperRef.current || !anchorEl || !open) return
    const popper = createPopper(anchorEl, popperRef.current, {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: { offset },
        },
      ],
    })
    return () => {
      popper.destroy()
    }
  }, [anchorEl, offset, open, placement])

  if (!open) return null

  const popperNode = (
    <StyledPopper ref={popperRef} {...rest}>
      {children}
    </StyledPopper>
  )

  if (!disablePortal && typeof window !== 'undefined' && typeof document !== 'undefined') {
    return createPortal(popperNode, document.body)
  }

  return popperNode
}
