export default function handler(req, res) {
  
  const {nodemailer}=req.body;
  try{
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
     type: 'OAuth2',
     user: "christian.mogensen.rh@gmail.com",
     pass: "chris2001",
     clientId: "904072759992-9a1rgosvbtm6c7sl98c22q6b9keou5vo.apps.googleusercontent.com",
     clientSecret: "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",
     refreshToken: "1//04w2C8P-P074vCgYIARAAGAQSNwF-L9Ir_ezmH2VUMf_OZTn4OGhbMU6-yUq9e2VcmfAYwi-9avr-Ro5vdYDjRaeFqsU2nLZtrQU",
  }
});


let cron = require('node-cron')
cron.schedule('* * * * *', () => {
//   console.log('test if cron works');
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const filoImgSrc = ["https://i.guim.co.uk/img/media/c5a3cb22f4ae7b4a4c7462ef4d2d0c71cacb3c65/0_232_2789_1673/master/2789.jpg?width=940&quality=85&auto=format&fit=max&s=0b695db320a8e16753050aab4c0ed389", "https://www.ancienthistorylists.com/wp-content/uploads/2015/03/Greek-Philosopher-parmenides-1024x576.jpg","https://miro.medium.com/max/1200/1*qYE-w8U1Oc5mE_1CRxlAbg.jpeg"]

const rng = Math.floor(Math.random() * filoImgSrc.length);
const pagePhiloPic = filoImgSrc[rng];
    const d = new Date();
    const dayDate = d.getDate()
    let dayMonth = monthName[d.getMonth()];
    const dayOfYear = date =>
      Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const doY = dayOfYear(new Date());
    function addZero(i) {
      if (i < 10) {i = "0" + i}
      return i;
    }
    
    const dayNew = new Date();
    let ho = addZero(dayNew.getHours());
    let mi = addZero(dayNew.getMinutes());
    let se = addZero(dayNew.getSeconds());
    let secondsTime = ho + ":" + mi;

let mailOptions = {
  from: "christian.mogensen.rh@gmail.com",
  to: "christian.mogensen.rh@gmail.com",
  subject: `Good day Stoic  ${secondsTime}`,
  html: `
  <html>
  <style>
  .btneffect:hover{
    background: red !important;
  }
  </style>
  <body>
  <div style="background-image:url(${pagePhiloPic}); background-repeat:no-repeat; background-position: right top;">
    <div style="padding-top:100px;max-width:375px; background-color:rgba(255,255,255,0.95);
    text-align: center; height:500px;">
      <h1>Good day, stoic!</h1>
      <h2>Today is the ${dayDate} ${dayMonth}</h2>
      <div>     
    <div>
    <a  style="text-decoration: none;  color: white; font-weight:bold;" href="https://tds-app.vercel.app/"><span class="btneffect" style="padding: 15px;
      
      margin: 0 auto;
      margin-bottom: 10px;
      max-width: 200px;
      display: block;
      background: rgba(55,65,81,1);
      border-radius: 5px;"> visit site</span></a>
    <a style="text-decoration: none;  color: white; font-weight:bold;" href="https://tds-app.vercel.app/book/${doY}"><span class="btneffect" style="padding: 15px;
      
      margin: 0 auto;
      margin-bottom: 10px;
      max-width: 200px;
      display: block;
      background: rgba(55,65,81,1);
      border-radius: 5px;"> jump to
        day</span></a></div>
  </div>
  </div> </div>
</body>
  </html>
`,
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
     console.log("Error: " + err);
  } else {
     console.log("Email sent successfully");
  }
});
})

// Googleapis
const { google } = require("googleapis");

// Pull out OAuth2 from googleapis
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
// 1
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

// 2
  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :( " + err);
      }
      resolve(token);
    });
  });

// 3
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.SENDER_EMAIL,
      accessToken,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

// 4
  return transporter;
};
}
catch(e){
  res.status(400).end(JSON.stringify({ message:"Error" }))
  return;
}

res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}