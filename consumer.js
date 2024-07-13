const { kafka } = require("./client.js");
const group = process.argv[2];
async function init() {
  // creating a consumer with group id
  const consumer = kafka.consumer({ groupId: group });
  consumer.connect();

  //   Subscribing to a topic
  consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  //   Running the consumer
  consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group}: ${topic}: Partition ${partition}, data:${message.value.toString()}`
      );
    },
  });
}

init();
