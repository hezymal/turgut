import { FC } from "react";
import styled from "styled-components";

import { NavLink } from "ui/Link";
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

export const Menu: FC = () => {
    return (
        <StyledMainBlock>
            <StyledList>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/examinations">Examinations</NavLink>
                </li>
            </StyledList>
        </StyledMainBlock>
    );
};
