import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "node-kafka-demo",
  // kafka brokers - <IP>:9092
  brokers: ["10.110.168.131:9092"],
});
