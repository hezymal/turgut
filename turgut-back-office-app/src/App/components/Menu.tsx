import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "ui/colors";
import { pt } from "ui/sizes";

const StyledMainBlock = styled.div`
    padding: ${pt(2)};
    height: 100%;
`;

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: ${pt(4)};
`;

const StyledNavLink = styled(NavLink)`
    color: ${colors.grey.base};
    text-decoration: none;

    &:hover {
        color: black;
    }

    &.active {
        color: black;
    }
`;

export const Menu: FC = () => {
    return (
        <StyledMainBlock>
            <StyledList>
                <li>
                    <StyledNavLink to="/">Dashboard</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/examinations">
                        Examinations
                    </StyledNavLink>
                </li>
            </StyledList>
        </StyledMainBlock>
    );
};
