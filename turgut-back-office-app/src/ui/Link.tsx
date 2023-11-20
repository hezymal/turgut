import { FC, ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "./colors";
import { pt } from "./sizes";

type LinkSize = "sm" | "md";

type LinkType = "button-default" | "button-primary";

type LinkWidth = "default" | "stretched";

interface NavLinkProps {
    children: ReactNode;
    to: string;
    size?: LinkSize;
    type?: LinkType;
    width?: LinkWidth;
}

interface RouterNavLinkWrapperProps {
    children: ReactNode;
    className?: string;
    size: LinkSize;
    to: string;
    type: LinkType;
    width: LinkWidth;
}

const RouterNavLinkWrapper: FC<RouterNavLinkWrapperProps> = ({
    children,
    className,
    to,
}) => {
    return (
        <RouterNavLink className={className} to={to}>
            {children}
        </RouterNavLink>
    );
};

const StyledRouterNavLinkWrapper = styled(RouterNavLinkWrapper)`
    background-color: ${colors.blue.base};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    padding: 0 ${pt(2)};
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    ${(props) => {
        switch (props.size) {
            case "md":
                return `
                    height: ${pt(5)};
                    line-height: ${pt(5)};
                    font-size: 14px;
                    padding: 0 ${pt(2)};
                `;

            case "sm":
                return `
                    height: ${pt(4)};
                    line-height: ${pt(4)};
                    font-size: 12px;
                    padding: 0 ${pt(1.5)};
                `;
        }
    }}

    ${(props) => {
        switch (props.type) {
            case "button-default":
                return `
                    background-color: ${colors.grey.base};
                `;

            case "button-primary":
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

export const NavLink: FC<NavLinkProps> = ({
    children,
    to,
    size = "md",
    type = "button-default",
    width = "default",
}) => {
    return (
        <StyledRouterNavLinkWrapper
            to={to}
            size={size}
            type={type}
            width={width}
        >
            {children}
        </StyledRouterNavLinkWrapper>
    );
};
