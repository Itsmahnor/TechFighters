const mongoose = require('mongoose');

const Database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mahnoorsarfraz23:1122@cluster0.qafqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        autoIndex: true,
      }
    );
    console.log("Connected");
  } catch (error) {
    console.log("Not connected", error);
  }
};

Database();
