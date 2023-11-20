import { FC } from "react";
import styled from "styled-components";

import { Examination } from "logic/examination";
import { NavLink } from "ui/Link";
import { colors } from "ui/colors";
import { pt } from "ui/sizes";

interface Props {
    examination: Examination;
}

const ACTIONS_WIDTH = pt(16);

const StyledMainBlock = styled.div`
    background-color: ${colors.grey.lighten};
    border-radius: 8px;
    display: flex;
    margin-bottom: ${pt(1)};
`;

const StyledDetails = styled.div`
    border-right: 1px solid white;
    padding: ${pt(2)};
    width: calc(100% - ${ACTIONS_WIDTH});
`;

const StyledActions = styled.div`
    padding: ${pt(2)};
    width: ${ACTIONS_WIDTH};
`;

export const ExaminationItem: FC<Props> = ({ examination }) => {
    return (
        <StyledMainBlock>
            <StyledDetails>{examination.title}</StyledDetails>
            <StyledActions>
                <NavLink
                    to={`/examinations/${examination.id}`}
                    size="sm"
                    width="stretched"
                >
                    Open
                </NavLink>
            </StyledActions>
        </StyledMainBlock>
    );
};
