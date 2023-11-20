import { FC } from "react";
import styled from "styled-components";

import { pt } from "ui/sizes";

export const HEADER_HEIGHT = pt(7);

const StyledMainBlock = styled.div`
    height: ${HEADER_HEIGHT};
    padding: 0 ${pt(2)};
`;

const StyledLogo = styled.a`
    color: black;
    line-height: ${HEADER_HEIGHT};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
`;

export const Header: FC = () => {
    return (
        <StyledMainBlock>
            <StyledLogo href="/">Turgut</StyledLogo>
            <div />
        </StyledMainBlock>
    );
};
