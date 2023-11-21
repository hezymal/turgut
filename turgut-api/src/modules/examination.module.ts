import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExaminationController } from "../controllers/examination.controller";
import { Examination } from "../entities/examination.entity";
import { ExaminationService } from "../services/examination.service";

@Module({
    imports: [TypeOrmModule.forFeature([Examination])],
    controllers: [ExaminationController],
    providers: [ExaminationService],
})
export class ExaminationModule {}
