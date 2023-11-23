import { FC, ReactNode } from "react";
import styled from "styled-components";

import { TextHeader } from "ui/Text";
import { colors } from "ui/colors";
import { pt } from "ui/sizes";

interface PageProps {
    content: ReactNode;
    aside?: ReactNode;
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

const StyledAsideOuterBlock = styled.div`
    width: ${pt(40)};
    height: 100%;
`;

const StyledAsideInnerBlock = styled.div`
    border-left: 1px solid ${colors.grey.lighten};
    height: 100%;
    margin-left: ${pt(4)};
    padding-left: ${pt(4)};
`;

export const Page: FC<PageProps> = ({ content, aside }) => {
    return (
        <StyledMainBlock>
            <StyledAlignmentBlock>
                <StyledContentBlock>{content}</StyledContentBlock>
                <StyledAsideOuterBlock>
                    {aside && (
                        <StyledAsideInnerBlock>{aside}</StyledAsideInnerBlock>
                    )}
                </StyledAsideOuterBlock>
            </StyledAlignmentBlock>
        </StyledMainBlock>
    );
};

export const PageBlock = styled.div`
    margin-bottom: ${pt(2)};
`;

export const PageTitle = TextHeader;

export const PageSubTitle = styled.small`
    color: ${colors.grey.base};

    &::before {
        content: "/";
        color: ${colors.grey.lighten};
        margin: 0 ${pt(2)};
    }
`;
