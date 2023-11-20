import { FC, ReactNode } from "react";
import styled from "styled-components";
import { pt } from "./sizes";

interface Props {
    children: ReactNode;
    size?: "h1" | "h2" | "h3" | "h4";
}

const H1 = styled.h1`
    margin-bottom: ${pt(3)};
`;

const H2 = styled.h2`
    margin-bottom: ${pt(2)};
`;

const H3 = styled.h3`
    margin-bottom: ${pt(1)};
`;

export const TextHeader: FC<Props> = ({ children, size = "h1" }) => {
    switch (size) {
        case "h1":
            return <H1>{children}</H1>;

        case "h2":
            return <H2>{children}</H2>;

        case "h3":
            return <H3>{children}</H3>;

        case "h4":
            return <h4>{children}</h4>;
    }
};
