import { FC, Fragment, useEffect, useState } from "react";

import { Page, PageBlock, PageTitle } from "common/Page";
import { Breadcrumb, Breadcrumbs } from "ui/Breadcrumbs";
import { Link } from "ui/Link";
import { ExaminationResponse, getExaminations } from "services/api";

import { ExaminationItem } from "./components/ExaminationItem";
import { ExaminationList } from "./components/ExaminationList";
import { Spinner } from "ui/Spinner";

export const ExaminationListPage: FC = () => {
    const [loading, setLoading] = useState(false);
    const [examinations, setExaminations] = useState<ExaminationResponse[]>([]);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const examinations = await getExaminations();
                setExaminations(examinations);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, []);

    return (
        <Page
            content={
                <Fragment>
                    <PageBlock>
                        <Breadcrumbs>
                            <Breadcrumb to="/examinations">
                                examinations
                            </Breadcrumb>
                        </Breadcrumbs>
                    </PageBlock>
                    <PageBlock>
                        <PageTitle>Examinations</PageTitle>
                    </PageBlock>
                    <PageBlock>
                        <Link type="button-primary" to="/examinations/create">
                            Create
                        </Link>
                    </PageBlock>
                    <PageBlock>
                        {loading ? (
                            <Spinner />
                        ) : (
                            <ExaminationList>
                                {examinations.map((examination) => (
                                    <ExaminationItem
                                        key={examination.id}
                                        examination={examination}
                                    />
                                ))}
                            </ExaminationList>
                        )}
                    </PageBlock>
                </Fragment>
            }
        />
    );
};
