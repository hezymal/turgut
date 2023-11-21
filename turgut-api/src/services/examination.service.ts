import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ObjectId, Repository } from "typeorm";

import { Examination } from "../entities/examination.entity";
import { Guid } from "../models/base";
import {
    CreateExaminationDto,
    CreateExaminationRequest,
    ExaminationDto,
} from "../models/examination";

@Injectable()
export class ExaminationService {
    constructor(
        @InjectRepository(Examination)
        private examinationsRepository: Repository<Examination>
    ) {}

    async createExamination(
        createExaminationDto: CreateExaminationDto
    ): Promise<ExaminationDto> {
        const examination = new Examination();
        examination.title = createExaminationDto.title;
        examination.description = createExaminationDto.description;
        await this.examinationsRepository.save(examination);

        return {
            id: examination._id + "",
            title: examination.title,
            description: examination.description,
        };
    }

    async searchExaminations(): Promise<ExaminationDto[]> {
        const examinations = await this.examinationsRepository.find();
        return examinations.map((examination) => ({
            id: examination._id + "",
            title: examination.title,
            description: examination.description,
        }));
    }

    getExaminationById(examinationId: Guid) {
        return this.examinationsRepository.findOneBy({
            _id: new ObjectId(examinationId),
        });
    }

    removeExaminationById(examinationId: Guid) {
        return this.examinationsRepository.delete(new ObjectId(examinationId));
    }
}
