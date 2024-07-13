import { kafka } from "./client.js";

async function init() {
  // creating a consumer with group id
  const consumer = kafka.consumer({ groupId: "consumer-group-1" });
  consumer.connect();

  //   Subscribing to a topic
  consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  //   Running the consumer
  consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${topic}: Partition ${partition}, data:${message.value.toString()}`
      );
    },
  });
}

init();
