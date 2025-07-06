import { styled, keyframes } from 'styled-components'

import { Loading as LoadingIcon } from './icons/Icons'

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SpinningIcon = styled(LoadingIcon)`
  animation: ${spin} 1s linear infinite;
`

export const Loading = () => <LoadingContainer><SpinningIcon width={32} height={32} /></LoadingContainer>
