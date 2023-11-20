import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const ExaminationList: FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};
