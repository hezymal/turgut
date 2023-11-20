import { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { colors } from "ui/colors";
import { pt } from "ui/sizes";

import { Menu } from "./Menu";
import { Header, HEADER_HEIGHT } from "./Header";

const MENU_BLOCK_WIDTH = pt(40);

const StyledMainBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
`;

const StyledHeaderBlock = styled.div`
    height: ${HEADER_HEIGHT};
    width: 100%;
`;

const StyledHeaderFixedBlock = styled.div`
    background-color: white;
    border-bottom: 1px solid ${colors.grey.lighten};
    height: ${HEADER_HEIGHT};
    position: fixed;
    width: 100%;
`;

const StyledMenuBlock = styled.div`
    border-right: 1px solid ${colors.grey.lighten};
    height: calc(100% - ${HEADER_HEIGHT});
    width: ${MENU_BLOCK_WIDTH};
`;

const StyledMenuFixedBlock = styled.div`
    border-right: 1px solid ${colors.grey.lighten};
    height: calc(100% - ${HEADER_HEIGHT});
    position: fixed;
    width: ${MENU_BLOCK_WIDTH};
`;

const StyledContentBlock = styled.div`
    height: calc(100% - ${HEADER_HEIGHT});
    width: calc(100% - ${MENU_BLOCK_WIDTH});
`;

export const Layout: FC = () => {
    return (
        <StyledMainBlock>
            <StyledHeaderBlock>
                <StyledHeaderFixedBlock>
                    <Header />
                </StyledHeaderFixedBlock>
            </StyledHeaderBlock>
            <StyledMenuBlock>
                <StyledMenuFixedBlock>
                    <Menu />
                </StyledMenuFixedBlock>
            </StyledMenuBlock>
            <StyledContentBlock>
                <Outlet />
            </StyledContentBlock>
        </StyledMainBlock>
    );
};
