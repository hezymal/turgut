import { FC, Fragment } from "react";

import { Page, PageBlock, PageTitle } from "common/Page";
import { Breadcrumbs, Breadcrumb } from "ui/Breadcrumbs";
import { Spinner } from "ui/Spinner";

export const DashboardPage: FC = () => {
    return (
        <Page
            content={
                <Fragment>
                    <PageBlock>
                        <Breadcrumbs>
                            <Breadcrumb to="/dashboard">dashboard</Breadcrumb>
                        </Breadcrumbs>
                    </PageBlock>
                    <PageBlock>
                        <PageTitle>Dashboard</PageTitle>
                    </PageBlock>
                    <PageBlock>
                        <Spinner />
                    </PageBlock>
                </Fragment>
            }
        />
    );
};
