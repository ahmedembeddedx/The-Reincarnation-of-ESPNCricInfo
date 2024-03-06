function checkCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Admin' && password === 'Admin123') {
        document.getElementById('loginStatus').innerText = 'Signing In';
        sessionStorage.setItem('isAdminLoggedIn', true);
        sessionStorage.setItem('isUserLoggedIn', true);
        window.location.href = "admin.html";
    }
    else if (username === 'User' && password === 'User123') {
        document.getElementById('loginStatus').innerText = 'Signing In';
        sessionStorage.setItem('isUserLoggedIn', true);
        window.location.href = "updates.html";
    }
    else {
        document.getElementById('loginStatus').innerText = '*Username or Password is incorrect';
        document.getElementById('loginStatus').style.color = '#880b0b';
        document.getElementById('loginStatus').style.textAlign= 'center';
    }
}

function toPlayers() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "login.html";
    }
    else {
        localStorage.setItem('playerStats', 'Babar Azam: 1000 runs, 50 average, 100 strike rate');
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
