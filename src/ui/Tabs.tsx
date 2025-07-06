import { useState } from 'react'
import type { ReactNode } from 'react'

import styled from 'styled-components'

import { colors } from '../styles/colors'

import { VStack } from './Stack'

interface TabItem {
  label: ReactNode,
  disabled?: boolean,
}

interface TabsProps {
  tabList: TabItem[],
  control?: ReactNode,
  children: ReactNode[],
}

const TabHeader = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px 12px 0 0;
  padding: 0 16px;
  width: 100%;
`

const TabButton = styled.button<{ $active: boolean, $disabled?: boolean }>`
  background: ${({ $active }) => ($active ? colors.white : colors.grayDark)};
  color: ${({ $active }) => ($active ? colors.blue : colors.black)};
  border: none;
  font-weight: 700;
  font-size: 18px;
  padding: 12px 24px;
  margin-right: 8px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border-radius: 8px 8px 0 0;
  transition: background 0.2s, color 0.2s;
  position: relative;
  z-index: 2;
`

const TabContent = styled.div`
  background: ${colors.white};
  border-radius: 12px 12px 0 0;
  padding: 24px;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`

export const Tabs = ({ tabList, control, children }: TabsProps) => {
  const [active, setActive] = useState(0)

  return (
    <VStack>
      <TabHeader>
        {tabList.map((tab, idx) => (
          <TabButton
            key={idx}
            $active={active === idx}
            $disabled={tab.disabled}
            onClick={() => !tab.disabled && setActive(idx)}
          >
            {tab.label}
          </TabButton>
        ))}
        <div style={{ flex: 1 }} />
        {control}
      </TabHeader>
      <TabContent>
        {Array.isArray(children) ? children[active] : children}
      </TabContent>
    </VStack>
  )
}
