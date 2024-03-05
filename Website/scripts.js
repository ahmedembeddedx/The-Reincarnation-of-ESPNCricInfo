// Function to check credentials
function checkCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Admin' && password === 'Admin123') {
        document.getElementById('loginStatus').innerText = 'AdminLogin:Allowed';
        sessionStorage.setItem('isAdminLoggedIn', true);
        sessionStorage.setItem('isUserLoggedIn', true);
        window.location.href = "admin.html";
    }
    else if (username === 'User' && password === 'User123') {
        document.getElementById('loginStatus').innerText = 'UserLogin:Allowed';
        sessionStorage.setItem('isUserLoggedIn', true);
        window.location.href = "updates.html";
    }
    else {
        document.getElementById('loginStatus').innerText = 'Error';
    }
}

function toPlayers() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "players.html";
    }
}

function toHome() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "updates.html";
    }
}

function toTeams() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "teams.html";
    }
}

function toMatches() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "matches.html";
    }
}

function toSeries() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "series.html";
    }
}

function toUpdates() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "updates.html";
    }
}

function toAdmin() {
    if (sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "admin.html";
    }
}
