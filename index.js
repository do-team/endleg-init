var AWS = require("aws-sdk");

exports.handler = (event, context, callback) => {

    console.log(event);

    AWS.config.update({
        region: "eu-central-1",
        endpoint: "dynamodb.eu-central-1.amazonaws.com"
    });

/*
    var user = event.user;
    var params = {
        TableName: "endleg-score",
        Item: {
            "user": user,
        }
    };
    var dynamodb = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    docClient.put(params, function(err, data) {
        if (err) {
            console.log(err);
            console.error("Unable to add new items from user ", user, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Request by user", user, " was successfully added.");
        }
    });
*/

};