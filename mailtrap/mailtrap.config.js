
import {MailtrapClient} from 'mailtrap'
// import dotenv from 'dotenv'

// dotenv.config()



const TOKEN = "a26782ea7a37b36e5e1b8a84cfd71dd4"
export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "key25mkm@gmail.com",
  }
];

mailtrapClient
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);