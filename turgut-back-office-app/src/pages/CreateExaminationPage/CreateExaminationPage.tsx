import { FC, FormEventHandler, Fragment, useState } from "react";

import { Page } from "common/Page";
import { createExamination } from "services/api";
import { Button } from "ui/Button";
import { Field, Form } from "ui/Form";
import { TextHeader } from "ui/Text";
import { TextEditor } from "ui/TextEditor";
import { TextInput } from "ui/TextInput";

export const CreateExaminationPage: FC = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState<any>(null);

    const handleFormSubmit: FormEventHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await createExamination({ title, description: "" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Page
            content={
                <Fragment>
                    <TextHeader>Create Examination</TextHeader>
                    <Form onSubmit={handleFormSubmit}>
                        <Field title="Title">
                            <TextInput value={title} onChange={setTitle} />
                        </Field>
                        <Field title="Description">
                            <TextEditor
                                elementId="create-examination-page"
                                value={description}
                                onChange={setDescription}
                            />
                        </Field>
                        <Field>
                            <Button type="primary" htmlType="submit">
                                Create
                            </Button>
                        </Field>
                    </Form>
                </Fragment>
            }
            aside={<div />}
        />
    );
};
