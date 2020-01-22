"use strict";

module.exports.get = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Great work! You have now deployed your first lambda"
      },
      null,
      2
    )
  };
};
