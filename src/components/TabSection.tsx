import { Box, Button, Flex, useTheme } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { FC, ReactChild, useState } from "react";

export type Tab = {
  label: string,
  content: string | ReactChild | ReactJSXElement
}

type TabSectionProps = {
  tabs: Tab[],
  darkMode?: boolean,
}

const TabSection: FC<TabSectionProps> = ({ tabs, darkMode = false, children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Flex direction={{ base: "column", md: "column", lg: "column", xl: "row" }} justifyContent={{ base: "normal", xl: "flex-start" }}>
      <Flex direction={{ base: "column", md: "row", lg: "row", xl: "column" }} minW={[100, 200, 300]} pb={{ sm: "4" }} mr={30} justifyContent={{ base: "center", xl: "flex-start" }}>
        {tabs.map((i, index) => (
          <Button
            _active={{ bg: "#365f85", color: "whiteAlpha.900" }}
            _hover={{ bg: darkMode ? "#365f85" : "#E2E8F0"}}
            isActive={index === activeTab}
            bg={!darkMode ? "#FFFFFF" : "#1a202c"}
            color={darkMode ? "whiteAlpha.900" : "blackAlpha.900"}
            size="xs"
            key={index}
            my={1}
            mx={{ sm: 2, md: 0, lg: 0 }}
            onClick={() => setActiveTab(index)}>
              {i.label}
            </Button>
        ))}
      </Flex>
      <Box justifyContent="center" display="flex" w="100%">
        {tabs[activeTab].content}
      </Box>
      {children}
    </Flex>
  )
}

export default TabSection;