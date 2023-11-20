import { FC } from "react";
import styled from "styled-components";

import { pt } from "./sizes";
import { colors } from "./colors";

interface Props {
    value: string;
    onChange: (newValue: string) => void;
}

const StyledInput = styled.input`
    background-color: ${colors.grey.lighten};
    display: block;
    width: 100%;
    height: ${pt(6)};
    line-height: calc(${pt(6)} - 2px);
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 0 ${pt(2)};
    font-family: inherit;
    font-size: inherit;
`;

export const TextInput: FC<Props> = ({ value, onChange }) => {
    return (
        <StyledInput
            value={value}
            onChange={(event) => onChange(event.currentTarget.value)}
        />
    );
};
