import { FC, Fragment, useEffect, useState } from "react";

import { Page } from "common/Page";
import { NavLink } from "ui/Link";
import { ExaminationResponse, getExaminations } from "services/api";

import { ExaminationItem } from "./components/ExaminationItem";
import { ExaminationList } from "./components/ExaminationList";

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
                    <NavLink type="button-primary" to="/examinations/create">
                        Create
                    </NavLink>
                    <ExaminationList>
                        {examinations.map((examination) => (
                            <ExaminationItem
                                key={examination.id}
                                examination={examination}
                            />
                        ))}
                    </ExaminationList>
                </Fragment>
            }
            aside={<div />}
        />
    );
};
