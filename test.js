const { info } = require('console');
const nodemailer =  require('nodemailer'); //설치된 nodemailer 가져오기
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "37e6f19d8d47b5",
        pass: "df3802738f967e"
}
}
const send = async(option) =>{
    nodemailer.createTransport(email).sendMail(option,(error, info) => {   //이메일 계정정보
        if(error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: "jimkong1102@gmail.com",
    to : "wlals3968@naver.com",
    subject : "node.js 테스트 이메일",
    text: "전송 완료"
}

send(email_data)