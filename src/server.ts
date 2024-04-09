import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const port = config.port;
const databaseURL = config.database_url as string;

async function bootstrap() {
  try {
    await mongoose.connect(databaseURL);
    console.log("Database connection is successful");

    app.listen(port, () => {
      console.log(`App listening to port ${port}`);
    });
  } catch (error) {
    console.log(`Database connection failed: ${error}`);
  }
}

bootstrap();
