import { FC, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Page } from "common/Page";
import { Guid } from "logic/base";
import { ExaminationResponse, getExaminationById } from "services/api";
import { TextHeader } from "ui/Text";

export const ExaminationPage: FC = () => {
    const examinationId = useParams().examinationId as Guid;
    const [loading, setLoading] = useState(false);
    const [examination, setExamination] = useState<ExaminationResponse | null>(
        null
    );

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const examination = await getExaminationById(examinationId);
                setExamination(examination);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [examinationId]);

    return (
        <Page
            content={
                examination && (
                    <Fragment>
                        <TextHeader>{examination.title}</TextHeader>
                        <div>
                            {examination.description}
                        </div>
                    </Fragment>
                )
            }
            aside={<div />}
        />
    );
};
