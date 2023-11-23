import { FC, Fragment, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import { PageBlock, PageSubTitle, PageTitle } from "common/Page";
import { Breadcrumbs, Breadcrumb } from "ui/Breadcrumbs";

interface Props {
    children: ReactNode;
    title: ReactNode;
}

export const Section: FC<Props> = ({ children, title }) => {
    return (
        <Fragment>
            <PageBlock>
                <Breadcrumbs>
                    <Breadcrumb to="/examinations">examinations</Breadcrumb>
                    <Breadcrumb to="/examinations/create" end={false}>
                        create
                    </Breadcrumb>
                </Breadcrumbs>
            </PageBlock>
            <PageBlock>
                <PageTitle>
                    Examination Creation
                    <PageSubTitle>{title}</PageSubTitle>
                </PageTitle>
            </PageBlock>
            <PageBlock>{children}</PageBlock>
        </Fragment>
    );
};
