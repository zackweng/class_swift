import type { ReactNode } from 'react'

import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 1000;
`

const ModalContainer = styled.div<{ width?: string, side: 'left' | 'right' }>`
  position: fixed;
  top: 50%;
  ${(props) => (props.side === 'right' ? 'right: 0;' : 'left: 0;')}
  transform: translateY(-50%);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  width: ${(props) => props.width || '400px'};
  z-index: 1001;
  padding: 32px 24px;
`

interface ModalProps {
  open: boolean,
  onClose: () => void,
  left?: ReactNode,
  right?: ReactNode,
  leftWidth?: string,
  rightWidth?: string,
}

export const Modal = ({
  open,
  onClose,
  left,
  right,
  leftWidth = '400px',
  rightWidth = '520px',
}: ModalProps) => {
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose} />
      {left && (
        <ModalContainer side="left" width={leftWidth}>
          {left}
        </ModalContainer>
      )}
      {right && (
        <ModalContainer side="right" width={rightWidth}>
          {right}
        </ModalContainer>
      )}
    </>,
    document.body
  )
}
