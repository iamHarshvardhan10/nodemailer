const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD
    }
})

const mailOptions = {
    from: {
        name: 'Harsh || devcodes.com',
        address: process.env.EMAIL
    },
    to: `${process.env.TO_MAIL}`,
    subject: 'Email Using Nodejs',
    text: 'Congratulaion Email sent',
    html: '<b></b>'

}


const sendEmail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
        console.log('sent')
    } catch (error) {
        console.log(error)
    }
}

sendEmail(transporter, mailOptions)