import { Guid } from "./base";

export interface CreateExaminationRequest {
    title: string;
    description: string;
}

export interface ExaminationResponse {
    id: Guid;
    title: string;
    description: string;
}

export interface CreateExaminationDto {
    title: string;
    description: string;
}

export interface ExaminationDto {
    id: Guid;
    title: string;
    description: string;
}
