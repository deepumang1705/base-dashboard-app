const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
      type: String
  },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    address: {
      type: String
  },
    phone: {
      type: String,
    },
    check: {
      type: Boolean,
      default: false
    }
  });


module.exports = mongoose.model("Post", post_schema);
