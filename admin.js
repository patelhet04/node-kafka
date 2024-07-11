import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "node-kafka-demo",
  // kafka brokers - <IP>:9092
  brokers: ["10.0.0.10:9092"],
});
