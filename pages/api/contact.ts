import type { NextApiRequest, NextApiResponse } from 'next';

const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  secure: true,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  const mailData = {
    to: 'sean.chris.doyle@gmail.com',
    from: process.env.email,
    subject: `PORTFOLIO INQUIRY from: ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message} | Sent from: ${req.body.email}</div>`
  }
  transport.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}