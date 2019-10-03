const Kafka = require('no-kafka');

var valueSum = 0;
// Create an instance of the Kafka consumer

const consumer = new Kafka.SimpleConsumer(
    {
        "connectionString": "localhost:9092"
    }
)


var data = messageSet => {
    messageSet.forEach(m => {
        var value = parseInt(m.message.value.toString('utf-8'));
        valueSum = valueSum + value;
        console.log(valueSum);
    });
}

return consumer.init().then(()=> {
    return consumer.subscribe('kafka-python-topic', data);
});