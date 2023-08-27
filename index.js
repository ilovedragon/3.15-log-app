module.exports.handler = async (event) => {
  // Log a message to CloudWatch Logs
  console.log('Lambda function executed with event:', JSON.stringify(event));
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! Your function executed successfully!",
          input: event,
        },
        null,
        2
      ),
    };
  };

  