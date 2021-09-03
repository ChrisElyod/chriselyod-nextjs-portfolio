import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { FC, ReactChild } from 'react';
export declare type Tab = {
    label: string;
    content: string | ReactChild | ReactJSXElement;
};
declare type TabSectionProps = {
    tabs: Tab[];
    darkMode?: boolean;
};
declare const TabSection: FC<TabSectionProps>;
export default TabSection;
