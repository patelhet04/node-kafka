import { kafka } from "./admin";

async function init() {
  const admin = kafka.admin();
  console.log("Kafka connecting........");
  admin.connect();
  console.log("Kafka connected........");

  admin.createTopics({
    topics: [],
  });
}
