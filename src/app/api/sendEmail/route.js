const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

export async function POST(request) {

    console.log("POST method reached");
    try {
      
      const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );
    
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

      const body = await request.json();
      console.log("Request body:", body);
      
      const { nombre, correo, plan } = body;
      console.log("Parsed data:", { nombre, correo, plan });
  
      const accessToken = await oAuth2Client.getAccessToken();
      console.log(accessToken);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token,
            },
        });

        console.log("Transporter created" + transporter);
  
  
      const mailOptions = {
        from: `${process.env.EMAIL_USER}`,
        to: "dart70607@gmail.com",
        subject: `Información del Plan: ${plan}`,
        text: ``,
        html: `<p>Hola el cliente ${nombre}, de correo: ${correo} quiere suscribirse al plan: ${plan}.</p><p>Mensaje enviado desde la web <strong>teamcaster</strong>. NO RESPONDER ESTE MENSAJE.</p>`,
      };
  
      console.log("Mail options configured:", mailOptions);
  
      const response = await transporter.sendMail(mailOptions);
      console.log("Email sent:", response);
  
      return new Response(JSON.stringify({ message: "Correo enviado con éxito" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error sending email:", error.message);
      return new Response(
        JSON.stringify({ error: "Error interno al enviar el correo", details: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  
