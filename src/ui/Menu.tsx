import { type ForwardedRef, useRef } from 'react'

import useMergedRef from '@react-hook/merged-ref'
import { useClickAway } from 'ahooks'
import styled from 'styled-components'

import { colors } from '../styles/colors'

import { Popper, type PopperProps } from './Popper'

export interface MenuProps extends PopperProps {
  onClose?: () => void,
  rootRef: ForwardedRef<HTMLDivElement>,
}

const StyledMenu = styled.div`
  z-index: 1400;
  max-height: 254px;
  overflow: auto;
  min-width: 160px;
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  padding: 8px 0;
`

export const Menu = (props: MenuProps) => {
  const {
    children,
    open,
    anchorEl,
    onClose,
    rootRef,
    ...rest
  } = props
  const menuRef = useRef<HTMLDivElement>(null)
  const mergeRef = useMergedRef(rootRef, menuRef)

  useClickAway(() => {
    if (!open) return
    onClose?.()
  }, [menuRef, anchorEl], ['click'])

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom"
      {...rest}
    >
      <StyledMenu ref={mergeRef}>
        {children}
      </StyledMenu>
    </Popper>
  )
}
