import { FC, ReactNode, Children } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { pt } from "./sizes";
import { colors } from "./colors";

interface Props {
    children: ReactNode;
}

const StyledMainBlock = styled.div`
    display: flex;
    margin-left: ${pt(-1)};
`;

const StyledChild = styled.div`
    &::before {
        content: "/";
        color: ${colors.grey.lighten};
        margin: 0 ${pt(1)};
    }
`;

export const Breadcrumbs: FC<Props> = ({ children }) => {
    children = Children.map(children, (child) => (
        <StyledChild>{child}</StyledChild>
    ));

    return <StyledMainBlock>{children}</StyledMainBlock>;
};

export const Breadcrumb = styled(NavLink).attrs((props) => ({
    end: props.end === false ? false : true,
}))`
    color: ${colors.grey.light};
    text-decoration: none;

    &.active {
        color: black;
    }
`;
