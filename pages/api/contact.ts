// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailgun = require('mailgun-js');

export default (req, res) => {

  if (req.method !== "POST") {
    res.status(404);
    return;
  }

  const projectName = req.body.projectName;
  const mg = mailgun({ apiKey: process.env.MAILGUN_PRIVATE_KEY, domain: process.env.MAILGUN_DOMAIN });
  const data = {
      from: `${projectName} <postmaster@notification.cabanadata.com>`,
      to: process.env.MAILGUN_RECEIVER_EMAIL,
      subject: `Solicitud desde website para ${req.body.serviceName}`,
      template: "clinica-odontovida-contact-form",
      'h:X-Mailgun-Variables': JSON.stringify(req.body)
  };
  mg.messages().send(data, function (error, body) {
    res.statusCode = 200;
    res.json({ message: 'Gracias por su mensaje' })
      console.log(body);
  });
}
