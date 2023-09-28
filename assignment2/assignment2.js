import readline from "readline";
import env from "dotenv";
import service from "./services/services.js";
const rdl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

env.config();

const ask = () => {
  rdl.question("Recipient Email: ", (email) => {
    if (!email) {
      console.log("please enter email");
      ask();
    } else {
      rdl.question("Subject: ", (subject) => {
        rdl.question("Message: ", (message) => {
          service(email, subject, message);
          rdl.close();
        });
      });
    }
  });
};

ask();