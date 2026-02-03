// David Budak, AI 7/2022
// Alen Gavrilović AI 13/2022

function sendMail(){


            let parms = {
                name : document.getElementById("name").value,
                email : document.getElementById("email").value,
                subject : document.getElementById("subject").value,
                message : document.getElementById("message").value,

}

emailjs.send("service_z2l128i","template_htstmys", parms).then(alert("Email Sent!"))

}