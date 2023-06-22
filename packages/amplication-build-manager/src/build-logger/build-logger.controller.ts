import { KafkaProducerService } from "@amplication/util/nestjs/kafka";
import { Body, Controller, Post } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Env } from "../env";
<<<<<<< HEAD
import { OnCodeGenerationLogRequest } from "./dto/OnCodeGenerationLogRequest";
=======
import { CodeGenerationLogRequestDto } from "./dto/OnCodeGenerationLogRequest";
import { CodeGenerationLog } from "@amplication/schema-registry";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

@Controller("build-logger")
export class BuildLoggerController {
  constructor(
    private readonly configService: ConfigService<Env, true>,
    private readonly producerService: KafkaProducerService
  ) {}

  @Post("create-log")
  async onCodeGenerationLog(
<<<<<<< HEAD
    @Body() logEntry: OnCodeGenerationLogRequest
  ): Promise<void> {
    await this.producerService.emitMessage(
      this.configService.get(Env.DSG_LOG_TOPIC),
      {
        key: logEntry.buildId,
        value: logEntry,
      }
=======
    @Body() logEntry: CodeGenerationLogRequestDto
  ): Promise<void> {
    const logEvent: CodeGenerationLog.KafkaEvent = {
      key: { buildId: logEntry.buildId },
      value: logEntry,
    };
    await this.producerService.emitMessage(
      this.configService.get(Env.DSG_LOG_TOPIC),
      logEvent
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    );
  }
}
