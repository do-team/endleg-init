var AWS = require("aws-sdk");

exports.handler = (event, context, callback) => {
    AWS.config.update({
        region: "eu-central-1",
        endpoint: "dynamodb.eu-central-1.amazonaws.com"
    });


    var params = {
        TableName: "endleg-main",
        Item: {
            "user": user,
            "name": event.body.name,
            "card1": cards.card1,
            "card2": cards.card2,
            "card3": cards.card3,
            "card4": cards.card4,
            "card5": cards.card5,
            "fightflag": 1
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

};