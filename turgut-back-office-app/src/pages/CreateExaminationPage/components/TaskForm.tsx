import { FC, FormEventHandler, useState } from "react";
import { useParams } from "react-router-dom";

import { Field, Form } from "ui/Form";
import { TextEditor } from "ui/TextEditor";
import { TextInput } from "ui/TextInput";

import { Section } from "./Section";

export const TaskForm: FC = () => {
    const { taskNumber } = useParams();

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
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
        <Section title={`Task #${taskNumber}`}>
            <Form onSubmit={handleFormSubmit}>
                <Field title="Task Title">
                    <TextInput value={title} onChange={setTitle} />
                </Field>
                <Field title="Task Description">
                    <TextEditor
                        elementId="general-info-form-text-editor"
                        value={description}
                        onChange={setDescription}
                    />
                </Field>
            </Form>
        </Section>
    );
};
