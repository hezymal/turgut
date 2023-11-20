import { FC, ReactNode } from "react";
import styled from "styled-components";

import { pt } from "ui/sizes";

interface Props {
    content: ReactNode;
    aside: ReactNode;
}

const StyledMainBlock = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    padding: ${pt(2)} 0;
`;

const StyledAlignmentBlock = styled.div`
    display: flex;
    height: 100%;
`;

const StyledContentBlock = styled.div`
    width: ${pt(100)};
`;

const StyledAsideBlock = styled.div`
    width: ${pt(40)};
    height: 100%;
`;

export const Page: FC<Props> = ({ content, aside }) => {
    return (
        <StyledMainBlock>
            <StyledAlignmentBlock>
                <StyledContentBlock>{content}</StyledContentBlock>
                <StyledAsideBlock>{aside}</StyledAsideBlock>
            </StyledAlignmentBlock>
        </StyledMainBlock>
    );
};
