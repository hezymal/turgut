import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "../controllers/app.controller";
import { Examination } from "../entities/examination.entity";
import { AppService } from "../services/app.service";
import { ExaminationModule } from "./examination.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mongodb",
            host: "127.0.0.1",
            port: 27017,
            username: "root",
            password: "root",
            authSource: "admin",
            entities: [Examination],
            synchronize: true,
        }),
        ExaminationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
