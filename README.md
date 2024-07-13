# Node-Kafka Demo

## Introduction to Kafka

Apache Kafka is a distributed streaming platform that can publish, subscribe to, store, and process streams of records in real-time. It's designed to handle large volumes of data with high throughput and low latency. Kafka is often used for building real-time data pipelines and streaming applications.

For more information, visit the [official Apache Kafka website](https://kafka.apache.org/).

## Setting Up Zookeeper and Kafka Using Docker

### Why Do We Need Zookeeper?

Zookeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. It is a critical component for managing a Kafka cluster, as it helps manage and coordinate the brokers.

### Start Zookeeper Container

Start the Zookeeper container and expose port 2181.

```sh
docker run -p 2181:2181 zookeeper
```

### Start Kafka Container

Start the Kafka container, expose port 9092, and set up the necessary environment variables.

```sh
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

Replace <PRIVATE_IP> with your actual private IP address.

## Connecting Node.js with Kafka Using `kafkajs`

### Prerequisites

Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).

### Installing Dependencies

First, create a new directory for your project and navigate into it:

```sh
mkdir node-kafka-demo
cd node-kafka-demo
```

Initialize a new Node.js project and install the kafkajs library :

```sh
npm init -y
npm install kafkajs
```

## Conclusion

Congratulations! You have successfully set up a simple Node.js application that connects to Kafka using `kafkajs`. This demo sends user input to a Kafka topic, demonstrating the basics of integrating Kafka with Node.js.
