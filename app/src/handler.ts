import ampq, { ConsumeMessage, Connection, Channel, Replies } from 'amqplib';
import AssertQueue = Replies.AssertQueue;

const RABBIT = process.env.RABBITMQ;
const PORT = process.env.RABBITMQ_PORT;
const USER = process.env.RABBITMQ_USERNAME;
const PASSWORD = process.env.RABBITMQ_PASS;
const QUEUE = process.env.RABBITMQ_QUEUE;

const open = ampq.connect(`amqp://${USER}:${PASSWORD}@${RABBIT}:${PORT}/test`);

const QueueUndefinedError = TypeError('Queue undefined - API did not specify a queue');

const errorHandler = (error:Error):void => {console.error(error)};

const onConnect = (connection:Connection):Promise<Channel> => connection.createChannel();

const onChannelCreate = (channel:Channel) => {
  if (! QUEUE) throw QueueUndefinedError;
  return channel
    .assertQueue(QUEUE, {})
    .then(consumer(channel));
}

function consumer(channel:Channel):(okay:AssertQueue)=>Promise<ConsumeMessage> {
  return (okay:AssertQueue):Promise<ConsumeMessage> => {
    if (! QUEUE) throw QueueUndefinedError;

    return new Promise((resolve) => {
      channel.consume(QUEUE, (msg: ConsumeMessage | null) => {
        if (!msg)
          throw TypeError('Message Undefined - Queue Did Not Return a Message');
        console.log(msg.content.toString())
        
        resolve(msg);
      });
    });
  }
}

export const handler = () => {
  return open
    .then(onConnect)
    .then(onChannelCreate)
    .catch(errorHandler);
}
