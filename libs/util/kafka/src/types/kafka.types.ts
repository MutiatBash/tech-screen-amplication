import { IHeaders, KafkaMessage as FullKafkaMessage } from "kafkajs";

<<<<<<< HEAD
export type Json = Record<string, unknown>;
=======
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Json = Record<string, any>;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

export interface DecodedKafkaMessage {
  key: string | Json | null;
  value: string | Json | null;
  headers?: IHeaders;
}

export type KafkaMessage = Pick<FullKafkaMessage, "key" | "value" | "headers">;

export type SchemaIds = { keySchemaId?: number; valueSchemaId?: number };
