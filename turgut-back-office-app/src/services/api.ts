import axios from "axios";

import { Guid } from "logic/base";

interface CreateExaminationRequest {
    title: string;
    description: string;
}

export interface ExaminationResponse {
    id: Guid;
    title: string;
    description: string;
}

export const createExamination = async (request: CreateExaminationRequest) => {
    const response = await axios.post<ExaminationResponse>(
        "/api/examinations",
        request
    );
    return response.data;
};

export const getExaminations = async () => {
    const response = await axios.get<ExaminationResponse[]>(
        "/api/examinations"
    );
    return response.data;
};

export const getExaminationById = (examinationId: Guid) => {
    return new Promise<ExaminationResponse>((resolve) => {
        setTimeout(() => {
            resolve({
                id: examinationId,
                title: "Examination 1",
                description:
                    "Examination One.\nThis is first examination in this cemestry.",
            });
        }, 1000);
    });
};
