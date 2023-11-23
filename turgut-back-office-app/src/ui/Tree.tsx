import { FC, ReactNode } from "react";
import styled from "styled-components";
import { pt } from "./sizes";
import { colors } from "./colors";

interface PageMapItemProps {
    children: ReactNode;
}

interface PageMapProps {
    children: ReactNode;
}

const StyledList = styled.ul`
    list-style: none;
    padding: 0 0 0 4px;
`;

const StyledItem = styled.li`
    position: relative;
    padding-left: ${pt(3)};
    margin-top: ${pt(2)};

    &::before {
        content: "";
        position: absolute;
        border-left: 1px dashed ${colors.grey.lighten};
        border-bottom: 1px dashed ${colors.grey.lighten};
        height: ${pt(3)};
        width: ${pt(2)};
        left: 0;
        top: ${pt(-2)};
    }

    &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border: 2px solid ${colors.grey.light};
        border-radius: 8px;
        background-color: white;
        left: -5px;
        top: calc(${pt(1)} - 5px);
    }
`;

export const Tree: FC<PageMapProps> = ({ children }) => {
    return <StyledList>{children}</StyledList>;
};

export const TreeItem: FC<PageMapItemProps> = ({ children }) => {
    return <StyledItem>{children}</StyledItem>;
};
