import styled from 'styled-components'

import { Close } from './icons/Icons'

const StyledCloseIcon = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  cursor: pointer;
  border: none;
`

interface CloseIconProps {
  onClick?: () => void,
}

export const CloseIcon = ({ onClick }: CloseIconProps) => (
  <StyledCloseIcon onClick={onClick}>
    <Close width={36} height={36} />
  </StyledCloseIcon>
)
