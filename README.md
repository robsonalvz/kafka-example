# Getting started

Python and Node applications for a simple example using Apache Kafka

## Installation

Please check the official Apache Kafka installation guide for server requirements before you start. [Official Documentation](https://kafka.apache.org/quickstart)

### Requirements

For building and running the application you need:

- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

Clone the repository

    git clone https://github.com/confluentinc/cp-docker-images


Switch to the repo folder

    cd cp-docker-images/examples/kafka-single-node

Setting up docker-compose.yml

    docker-compose up -d

Looking at the logs you can verify if that services are working as expected

    docker-compose ps
    docker-compose logs zookeeper | grep -i binding
    docker-compose logs kafka | grep -i started

Generate afka-python-topic topic on Kafka 

    docker-compose exec kafka  \
    kafka-topics --create --topic kafka-python-topic --partitions 1 --replication-factor 1 --if-not-exists --zookeeper zookeeper:2181

Install node modules in consumer application

```
yarn install
```

Install python modules in producer application

````
sudo pip install -r requirements.txt
````


Start the local producer server
```
    python producer.py
```

You can now access consumers, open each of consumers in different terminals 

````
node consumer-avg.js
node consumer-sum.js
````
