const form = document.getElementById("loginForm"); const message = document.getElementById("message");
form.addEventListener("submit", function(event) { event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (email === "test@gmail.com" && password === "123456") {
    message.style.color = "green";
    message.textContent = "ورود موفق بود!";

    // بعداً می‌توانیم کاربر را به صفحه دیگری ببریم
    // window.location.href = "home.html";

} else {
    message.style.color = "red";
    message.textContent = "ایمیل یا رمز عبور اشتباه است.";
}
});
