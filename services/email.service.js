const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"outlook",
    port: 587,
    auth: {
      user: 'egzonbajrami1928@outlook.com',
      pass: 'Xoni_1234',
    },
  })
  
  const forgotPasswordTemplate = (token) => {
    const  url = `${process.env.FRONT_URL}/forms/applications/${token}`;
    return {
      subject: 'Aplikim pune',
      text: `Keni një aplikim te ri pune: \n ${url}`,
      html: `
        <h1>Aplikim pune</h1>
        <p>Kliko më poshtë për të shikuar aplikimin.</p>
        <a href="${url}">Shiko aplikimin</a>`
    }
  }
  module.exports = {
    sendForgotPasswordEmail: async ( token) => {
      console.log('send password func')
      const body = forgotPasswordTemplate(token)
  
      const info = await transporter.sendMail({
        from: 'egzonbajrami1928@outlook.com',
        to:  'fillojeta.murseli@conad-kosova.com',
        subject: body.subject,
        text: body.text,
        html: body.html,
      })
      return info.response
    },
}
  