function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "1234") {
        location.href = "main.html";
    } else {
        alert("帳號或密碼錯誤！");
    }
}

function register() {
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const email = document.getElementById("email").value;

    if (password !== confirmPassword) {
        alert("密碼不一致！");
        return;
    }

    alert("註冊成功！");
    location.href = "index.html";
}

function sendResetEmail() {
    const email = document.getElementById("forgot-email").value;
    alert(`已發送驗證碼至 ${email}`);
    location.href = "reset-password.html";
}

function resetPassword() {
    const newPassword = document.getElementById("new-password").value;
    const confirmNewPassword = document.getElementById("confirm-new-password").value;
    const verificationCode = document.getElementById("verification-code").value;

    if (newPassword !== confirmNewPassword) {
        alert("密碼不一致！");
        return;
    }

    if (verificationCode === "123456") {
        alert("密碼重設成功！");
        location.href = "index.html";
    } else {
        alert("驗證碼錯誤！");
    }
}

function logout() {
    location.href = "index.html";
}
