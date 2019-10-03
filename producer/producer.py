from kafka import KafkaProducer
import json
import random
from time import sleep


producer = KafkaProducer(bootstrap_server='localhost:29092',value_serializer=lambda v: str(v).encode('utf-8'))

print('Ctrl+c to Sop')

while True:
    producer.send('kafka-python-topic', random.randint(1,999))