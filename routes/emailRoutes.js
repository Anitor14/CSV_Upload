const express = require("express");
const router = express.Router();
const aws = require("aws-sdk");

// const ses = new aws.SES({ region: "us-east-2" });

const SES_CONFIG = {
  accessKeyId: "AKIA5K4DVOFLFTQQBJNQ",
  secretAccessKey: "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",
  region: "us-east-1",
};

const ses = new aws.SES(SES_CONFIG);

router.post("/email", function (req, res) {
  const { email, message, name } = req.body;
  console.log("req", req.body);
  sesTest("anitorabraham@gmail.com", email, message, name)
    .then((val) => {
      console.log("got this back", val);
      res.send("Successfully Sent Email");
    })
    .catch((err) => {
      res.send(err);

      console.log("There was an error!", err);
    });
});

function sesTest(emailTo, emailFrom, message, name) {
  var params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: { Data: "From Contact Form: " + name + "\n " + message },
      },

      Subject: { Data: "From: " + emailFrom },
    },
    Source: "abrahamanitor@gmail.com",
  };

  return ses.sendEmail(params).promise();
}

module.exports = router;
