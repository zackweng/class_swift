import type { ReactNode } from 'react'

import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 1000;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  z-index: 1001;
  width: 100%;
`

const ModalContainer = styled.div<{ width?: string }>`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  width: ${(props) => props.width || '400px'};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
`

interface ModalProps {
  open: boolean,
  onClose: () => void,
  left?: ReactNode,
  right?: ReactNode,
  leftWidth?: string,
  rightWidth?: string,
  /**
   * If true, clicking the backdrop will not fire onClose
   * @default false
   */
  disableBackdropClick?: boolean,
}

export const Modal = ({
  open,
  onClose,
  left,
  right,
  leftWidth = '400px',
  rightWidth = '520px',
  disableBackdropClick = false,
}: ModalProps) => {
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={disableBackdropClick ? undefined : onClose} />
      <ModalWrapper>
        {left && (
          <ModalContainer width={leftWidth}>
            {left}
          </ModalContainer>
        )}
        {right && (
          <ModalContainer width={rightWidth}>
            {right}
          </ModalContainer>
        )}
      </ModalWrapper>
    </>,
    document.body
  )
}
