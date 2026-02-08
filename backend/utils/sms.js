const axios = require("axios");

const sendOtpSMS = async (mobile, otp) => {
  try {
    await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "otp",
        variables_values: otp,
        numbers: mobile
      },
      {
        headers: {
          authorization: "A6gTRQmHOU3dko1MDYLtKvrx5PibfFCs8IlES97hzVZpnXcuJ2ka6vFXyCrjlSW3QGq2JfBgMKDoLIE0",
          "Content-Type": "application/json"
        }
      }
    );
  } catch (err) {
    console.error("SMS ERROR:", err.response?.data || err.message);
    throw new Error("SMS failed");
  }
};

module.exports = sendOtpSMS;
