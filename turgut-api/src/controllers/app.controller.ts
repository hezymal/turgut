import { Controller, Get } from "@nestjs/common";

import { AppService } from "../services/app.service";

@Controller("app")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("version")
    getVersion(): string {
        return this.appService.getVersion();
    }
}
