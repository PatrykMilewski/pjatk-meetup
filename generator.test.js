process.env.AWS_REGION = 'eu-west-1';
process.env.TABLE_NAME = 'metadata-patryk-imagesTable';

const { handler } = require('./generator');
const event = {
  "Records": [
    {
      "eventVersion": "2.1",
      "eventSource": "aws:s3",
      "awsRegion": "eu-west-1",
      "eventTime": "2021-05-05T13:01:08.269Z",
      "eventName": "ObjectCreated:Put",
      "s3": {
        "s3SchemaVersion": "1.0",
        "bucket": {
          "name": "metadata-patryk-input",
          "ownerIdentity": {
            "principalId": "A3VRFZKMJ8GM93"
          },
          "arn": "arn:aws:s3:::metadata-patryk-input"
        },
        "object": {
          "key": "testimage.jpeg",
          "size": 1467406,
          "eTag": "8a0b4d32b57f34eec7bd3e93e7929eb4",
          "sequencer": "00609297168715DFA2"
        }
      }
    }
  ]
};

it('works for example event', async () => {
  await handler(event);
})
