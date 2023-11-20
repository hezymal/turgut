import EditorJS from "@editorjs/editorjs";
import { Component } from "react";
import styled from "styled-components";
import { colors } from "./colors";

interface Props {
    elementId: string;
    value: any;
    onChange: (newValue: any) => void;
}

const StyledMainBlock = styled.div`
    background-color: ${colors.grey.lighten};
    border: none;
    border-radius: 8px;
`;

export class TextEditor extends Component<Props> {
    private editor: EditorJS | null;

    constructor(props: Props) {
        super(props);

        this.createEditor = this.createEditor.bind(this);

        this.editor = null;
    }

    render() {
        const { elementId } = this.props;

        return <StyledMainBlock id={elementId} />;
    }

    componentDidMount() {
        if (!this.editor) {
            this.createEditor();
        }
    }

    private createEditor() {
        const { elementId } = this.props;

        this.editor = new EditorJS({
            holder: elementId,
        });
    }
}
