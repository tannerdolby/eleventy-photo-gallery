const email = "tannercdolby@gmail.com";
const submit = document.querySelector(".reach-me");

function sendMail() {
    const subject = document.querySelector(".email-subject").value;
    const message = document.querySelector(".email-msg").value;
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
}