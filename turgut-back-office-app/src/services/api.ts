interface CreateExaminationRequest {
    title: string;
    description: string;
}

export interface ExaminationResponse {
    id: string;
    title: string;
    description: string;
}

export const createExamination = (request: CreateExaminationRequest) => {
    return new Promise<ExaminationResponse>((resolve) => {
        setTimeout(() => {
            resolve({
                id: "1",
                title: request.title,
                description: request.description,
            });
        }, 1000);
    });
};

export const getExaminations = () => {
    return new Promise<ExaminationResponse[]>((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: "1",
                    title: "Examination 1",
                    description:
                        "Examination One.\nThis is first examination in this cemestry.",
                },
                {
                    id: "2",
                    title: "Examination 2",
                    description:
                        "Examination Two.\nThis is second examination in this cemestry.",
                },
                {
                    id: "3",
                    title: "Examination 3",
                    description:
                        "Examination Three.\nThis is third examination in this cemestry.",
                },
                {
                    id: "4",
                    title: "Examination 4",
                    description:
                        "Examination Four.\nThis is fourth examination in this cemestry.",
                },
            ]);
        }, 1000);
    });
};
