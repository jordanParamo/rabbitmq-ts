Receive Data from AMQP via Rabbitmq and aggregate it for 5 minute data (collect data over 5 minutes and display the Average Value)
Create an App of your Tech-Stack Choice that is listed here => https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html

 

Receive the Data from the rabbitmq
- 20.52.149.215:5672 (data access)
- 20.52.149.215:15672 (UI Management Access)
- Login: jordan
- Pass: u8934ruih23ren2
- use the vhost "test"
- Queue : WindDetails_Queue

 

(group by ID)

 

Generate Avergale 5 Minute Data (aggregate) from the following Values:
- ActivePower
- LoadFactor
- WindSpeed

 


With the Avergae Data, display the Last data you get for this Values (no Timestamp):
- NumberOfTurbines
- TotalCapacity
- StateFA
- StateWA
- StateAV
- StateNC
- WindDirection
