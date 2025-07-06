import { styled } from 'styled-components'

import { Loading } from './Loading'

const LoadingModalContent = styled.div`
  height: 320px;
`

export const LoadingModal = () => <LoadingModalContent><Loading /></LoadingModalContent>
