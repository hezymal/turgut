import { FC, ReactNode } from "react";
import styled from "styled-components";

import { TextHeader } from "./Text";
import { pt } from "./sizes";

interface FormProps {
    children: ReactNode;
    onSubmit?: () => void;
}

interface FieldProps {
    children: ReactNode;
    title?: string;
}

const StyledForm = styled.form``;

const StyledField = styled.div`
    margin: 0 0 ${pt(2)} 0;
`;

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
    return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export const Field: FC<FieldProps> = ({ children, title }) => {
    return (
        <StyledField>
            {title && <TextHeader size="h3">{title}</TextHeader>}
            <div>{children}</div>
        </StyledField>
    );
};
