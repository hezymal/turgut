import { Body, Controller, Get, Post } from "@nestjs/common";

import {
    CreateExaminationRequest,
    ExaminationResponse,
} from "../models/examination";
import { ExaminationService } from "../services/examination.service";

@Controller("examinations")
export class ExaminationController {
    constructor(private examinationService: ExaminationService) {}

    @Get()
    async searchExaminations() {
        const examinations = await this.examinationService.searchExaminations();
        return examinations.map((examination) => ({
            id: examination.id,
            title: examination.title,
            description: examination.description,
        }));
    }

    @Post()
    async createExamination(
        @Body() request: CreateExaminationRequest
    ): Promise<ExaminationResponse> {
        const examination =
            await this.examinationService.createExamination(request);
        return {
            id: examination.id,
            title: examination.title,
            description: examination.description,
        };
    }
}
