import { FC, FormEventHandler, useState } from "react";

import { createExamination } from "services/api";
import { Field, Form } from "ui/Form";
import { TextEditor } from "ui/TextEditor";
import { TextInput } from "ui/TextInput";

import { Section } from "./Section";

export const IntroductionForm: FC = () => {

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
        <Section title="Introduction">
            <Form onSubmit={handleFormSubmit}>
                <Field title="Examination Title">
                    <TextInput value={title} onChange={setTitle} />
                </Field>
                <Field title="Introduction Text">
                    <TextEditor
                        elementId="introduction-form-text-editor"
                        value={description}
                        onChange={setDescription}
                    />
                </Field>
            </Form>
        </Section>
    );
};
