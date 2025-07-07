import { useRef, useState } from 'react'

import { Menu, VStack } from '@ui'
import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { DotsVertical } from '../icons/Icons'

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuItem = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 8px 16px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${colors.grayDark};
  }
`

export const OperationMenu = () => {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <IconButton
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        <DotsVertical width={24} height={24} />
      </IconButton>
      <Menu
        rootRef={menuRef}
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => setOpen(false)}
      >
        <VStack>
          <MenuItem>選單項目 1</MenuItem>
          <MenuItem>選單項目 2</MenuItem>
          <MenuItem>選單項目 3</MenuItem>
        </VStack>
      </Menu>
    </>
  )
}
