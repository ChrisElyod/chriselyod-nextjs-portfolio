import { Button, Flex, useTheme } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, { FC, ReactChild, useState } from 'react';

type Tab = {
  label: string,
  content: string | ReactChild | ReactJSXElement
}

type TabSectionProps = {
  tabs: Tab[],
  darkMode?: boolean,
}

const TabSection: FC<TabSectionProps> = ({ tabs, darkMode = false }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const theme = useTheme();

  const generateTabs = () => {
    return tabs.map((i, index) => <Button isActive={index === activeTab} bg={!darkMode ? '#FFFFFF' : '#1a202c'} size="sm" key={index} my={1} mx={{ sm: 2, md: 0, lg: 0 }} onClick={() => setActiveTab(index)}>{i.label}</Button>);
  }
  return (
    <Flex direction={{ base: "column", md: "row", lg: "row"}}>
      <Flex direction={{ base: "row", md: "column", lg: "column"}} minW={[100, 200, 300]}  mr={30}>
        {generateTabs()}
      </Flex>
      <div>
        {tabs[activeTab].content}
      </div>
    </Flex>
  )
}

export default TabSection;