import type { CSSProperties } from 'react'

import { HStack, Text, VStack } from '@ui'
import styled from 'styled-components'

import { colors } from '../../styles/colors'

const Card = styled(VStack)<{ $enabled: boolean }>`
  width: 120px;
  border-radius: 12px;
  border: 2px solid ${({ $enabled }) => ($enabled ? colors.blue : colors.grayDark)};
  align-items: center;
`

const Header = styled(Text)<{ $enabled: boolean }>`
  width: 100%;
  background: ${({ $enabled }) => ($enabled ? colors.blue : colors.grayDark)};
  border-radius: 10px 10px 0 0;
  text-align: center;
  padding: 4px 0;
`

const Name = styled(Text)<{ $enabled: boolean }>`
  color: ${({ $enabled }) => ($enabled ? colors.black : colors.grayDark)};
  text-align: center;
  padding: 4px 16px;
`

const ScoreRow = styled(HStack)<{ $enabled: boolean }>`
  border-top: 2px solid ${({ $enabled }) => ($enabled ? colors.blue : colors.grayDark)};
  padding: 4px;
  justify-content: space-between;
`

const ScoreButton = styled.button<{ color: CSSProperties['color'], $disabled: boolean }>`
  background: ${({ color, $disabled }) => ($disabled ? colors.grayDark : color)};
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  width: 32px;
  height: 24px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`

const Score = styled(Text)<{ $enabled: boolean }>`
  color: ${({ $enabled }) => ($enabled ? colors.black : colors.grayDark)};
  padding: 0 8px;
`

interface SingleStudentProps {
  id: number,
  name: string,
  score: number,
  enabled: boolean,
  leftButtonDisabled: boolean,
  rightButtonDisabled: boolean,
  onAdd: () => void,
  onSub: () => void,
}

export const SingleStudent = ({
  id,
  name,
  score,
  enabled,
  leftButtonDisabled,
  rightButtonDisabled,
  onAdd,
  onSub,
}: SingleStudentProps) => (
  <Card $enabled={enabled}>
    <Header $enabled={enabled} fontSize="16px" fontWeight={700} color={colors.white}>{String(id).padStart(2, '0')}</Header>
    <Name $enabled={enabled} fontSize="22px" fontWeight={700}>{name}</Name>
    <ScoreRow $enabled={enabled}>
      <ScoreButton color={colors.red} $disabled={leftButtonDisabled} onClick={onSub}>-1</ScoreButton>
      <Score $enabled={enabled} fontSize="18px" fontWeight={700}>{score}</Score>
      <ScoreButton color={colors.green} $disabled={rightButtonDisabled} onClick={onAdd}>+1</ScoreButton>
    </ScoreRow>
  </Card>
)
