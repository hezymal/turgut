import { FC, ReactNode } from "react";
import styled from "styled-components";

import { colors } from "./colors";
import { pt } from "./sizes";

type ButtonSize = "sm" | "md";

type ButtonType = "default" | "primary";

type ButtonWidth = "default" | "stretched";

interface Props {
    children: ReactNode;
    htmlType?: "button" | "reset" | "submit";
    size?: ButtonSize;
    type?: ButtonType;
    width?: ButtonWidth;
}

interface StyledButtonProps {
    buttonType: ButtonType;
    size: ButtonSize;
    width: ButtonWidth;
}

const StyledButton = styled.button<StyledButtonProps>`
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;

    ${(props) => {
        switch (props.size) {
            case "md":
                return `
                    height: ${pt(5)};
                    font-size: 14px;
                    padding: 0 ${pt(2)};
                `;

            case "sm":
                return `
                    height: ${pt(4)};
                    font-size: 12px;
                    padding: 0 ${pt(1.5)};
                `;
        }
    }}

    ${(props) => {
        switch (props.buttonType) {
            case "default":
                return `
                    background-color: ${colors.grey.base};
                `;

            case "primary":
                return `
                    background-color: ${colors.blue.base};
                `;
        }
    }}

    ${(props) => {
        switch (props.width) {
            case "stretched":
                return `
                    width: 100%;
                `;
        }
    }}
`;

export const Button: FC<Props> = ({
    children,
    htmlType = "button",
    size = "md",
    type = "default",
    width = "default",
}) => {
    return (
        <StyledButton
            buttonType={type}
            size={size}
            type={htmlType}
            width={width}
        >
            {children}
        </StyledButton>
    );
};
