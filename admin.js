import { kafka } from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("Kafka connecting........");
  await admin.connect();
  console.log("Kafka connected........");

  console.log("Creating topic");
  await admin.createTopics({
    // We are using Zomato as case study
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created [rider-updates]");

  console.log("Admin disconnected");
  await admin.disconnect();
}

init();
