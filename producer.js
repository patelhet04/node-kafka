const { kafka } = require("./client.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

async function init() {
  const producer = kafka.producer();
  console.log("Connecting producer");
  await producer.connect();
  console.log("Producer connected");

  rl.setPrompt(" >");
  rl.prompt();
  rl.on("line", async (line) => {
    const [riderName, location] = line.split(" ");
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          partition: location === "Canada" ? 0 : 1,
          key: "location-update",
          value: JSON.stringify({ name: riderName, location: location }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();
