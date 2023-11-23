import { FC, FormEventHandler, useState } from "react";

import { Button } from "ui/Button";
import { Field, Form } from "ui/Form";
import { TextEditor } from "ui/TextEditor";

import { Section } from "./Section";

export const CompletionSection: FC = () => {
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState<any>(null);

    const handleFormSubmit: FormEventHandler = async (event) => {
        event.preventDefault();

        setLoading(true);
        try {
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section title="Completion">
            <Form onSubmit={handleFormSubmit}>
                <Field title="Completion Text">
                    <TextEditor
                        elementId="completion-text"
                        value={description}
                        onChange={setDescription}
                    />
                </Field>
                <Field>
                    <Button type="primary" htmlType="submit">
                        Publish
                    </Button>
                </Field>
            </Form>
        </Section>
    );
};
