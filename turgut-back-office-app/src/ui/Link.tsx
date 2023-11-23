import { FC, ReactNode } from "react";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors } from "./colors";
import { pt } from "./sizes";

type LinkSize = "sm" | "md";

type LinkType = "default" | "button-default" | "button-primary";

type LinkWidth = "default" | "stretched";

interface LinkProps {
    children: ReactNode;
    to: string;
    size?: LinkSize;
    type?: LinkType;
    width?: LinkWidth;
}

interface NavLinkProps {
    children: ReactNode;
    end?: boolean;
    to: string;
    size?: LinkSize;
    type?: LinkType;
    width?: LinkWidth;
}

interface RouterLinkProxyProps {
    children: ReactNode;
    className?: string;
    to: string;
    $size: LinkSize;
    $type: LinkType;
    $width: LinkWidth;
}

interface RouterNavLinkProxyProps {
    children: ReactNode;
    className?: string;
    end?: boolean;
    to: string;
    $size: LinkSize;
    $type: LinkType;
    $width: LinkWidth;
}

const defaultStylesMixin = css<RouterLinkProxyProps>`
    color: ${colors.grey.light};
    text-decoration: none;

    &:hover,
    &.active {
        color: black;
    }

    ${(props) => {
        switch (props.$size) {
            case "md":
                return `
                    font-size: 1rem;
                `;

            case "sm":
                return `
                    font-size: 0.875rem;
                `;
        }
    }}
`;

const buttonStylesMixin = css<RouterLinkProxyProps>`
    border: none;
    border-radius: 8px;
    display: inline-block;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    ${(props) => {
        switch (props.$size) {
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
        switch (props.$type) {
            case "button-default":
                return `
                    background-color: ${colors.grey.base};
                    color: white;
                `;

            case "button-primary":
                return `
                    background-color: ${colors.blue.base};
                    color: white;
                `;
        }
    }}

    ${(props) => {
        switch (props.$width) {
            case "stretched":
                return `
                    width: 100%;
                `;
        }
    }}
`;

const RouterLinkProxy: FC<RouterLinkProxyProps> = (props) => (
    <RouterLink {...props} />
);

const RouterNavLinkProxy: FC<RouterNavLinkProxyProps> = (props) => (
    <RouterNavLink {...props} />
);

const StyledRouterLinkProxy = styled(RouterLinkProxy)`
    ${(props) => {
        switch (props.$type) {
            case "button-default":
            case "button-primary":
                return buttonStylesMixin;

            case "default":
                return defaultStylesMixin;
        }
    }}
`;

const StyledRouterNavLinkProxy = styled(RouterNavLinkProxy)`
    ${(props) => {
        switch (props.$type) {
            case "button-default":
            case "button-primary":
                return buttonStylesMixin;

            case "default":
                return defaultStylesMixin;
        }
    }}
`;

export const Link: FC<LinkProps> = ({
    children,
    to,
    size = "md",
    type = "default",
    width = "default",
}) => {
    return (
        <StyledRouterLinkProxy to={to} $size={size} $type={type} $width={width}>
            {children}
        </StyledRouterLinkProxy>
    );
};

export const NavLink: FC<NavLinkProps> = ({
    children,
    end,
    to,
    size = "md",
    type = "default",
    width = "default",
}) => {
    return (
        <StyledRouterNavLinkProxy
            end={end}
            to={to}
            $size={size}
            $type={type}
            $width={width}
        >
            {children}
        </StyledRouterNavLinkProxy>
    );
};
