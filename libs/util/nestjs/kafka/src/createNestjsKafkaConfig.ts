import { KafkaOptions, Transport } from "@nestjs/microservices";
import { ConsumerConfig } from "@nestjs/microservices/external/kafka.interface";
import { KafkaEnvironmentVariables } from "@amplication/util/kafka";
import { randomUUID } from "crypto";

export const KAFKA_CLIENT = "KAFKA_CLIENT";

export function createNestjsKafkaConfig(envSuffix = ""): KafkaOptions {
  const kafkaEnv = new KafkaEnvironmentVariables(envSuffix);
  const groupId = kafkaEnv.getGroupId();
  let consumer: ConsumerConfig | undefined;
  if (groupId) {
<<<<<<< HEAD
    consumer = { groupId };
=======
    consumer = {
      groupId,
      sessionTimeout: kafkaEnv.getConsumerSessionTimeout(),
      rebalanceTimeout: kafkaEnv.getConsumerRebalanceTimeout(),
      heartbeatInterval: kafkaEnv.getConsumerHeartbeat(),
    };
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  }

  return {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: kafkaEnv.getBrokers(),
        clientId: kafkaEnv.getClientId() + `-${randomUUID()}`,
        ssl: kafkaEnv.getClientSslConfig(),
      },
      consumer,
    },
  };
}
