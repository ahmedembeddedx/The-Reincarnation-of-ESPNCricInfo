function switchbetween() {
    if (sessionStorage.getItem('isDark') === 'true') {
        document.getElementById('css_file').href = 'styles_d.css'; // Apply dark theme
    } else {
        document.getElementById('css_file').href = 'styles.css'; // Apply light theme
    }
}

function checkCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Admin' && password === 'Admin123') {
        document.getElementById('loginStatus').innerText = 'Signing In';
        sessionStorage.setItem('isAdminLoggedIn', true);
        sessionStorage.setItem('isUserLoggedIn', true);
        window.location.href = "admin.html";
        sessionStorage.setItem('isDark', true);
    }
    else if (username === 'User' && password === 'User123') {
        document.getElementById('loginStatus').innerText = 'Signing In';
        sessionStorage.setItem('isUserLoggedIn', true);
        window.location.href = "updates.html";
        sessionStorage.setItem('isDark', true);
    }
    else {
        document.getElementById('loginStatus').innerText = '*Username or Password is incorrect';
        document.getElementById('loginStatus').style.color = '#880b0b';
        document.getElementById('loginStatus').style.textAlign= 'center';
    }
}

function toPlayers() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "index.html";
    }
    else {
        localStorage.setItem('playerStats', 'Babar Azam: 1000 runs, 50 average, 100 strike rate');
        window.location.href = "players.html";
    }
}

function toTeams() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "index.html";
    }
    else {
        window.location.href = "teams.html";
    }
}

function toMatches() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "index.html";
    }
    else {
        window.location.href = "matches.html";
    }
}

function toSeries() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "index.html";
    }
    else {
        window.location.href = "series.html";
    }
}

function toUpdates() {
    if (sessionStorage.getItem('isUserLoggedIn') !== 'true' && sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "index.html";
    }
    else {
        window.location.href = "updates.html";
    }
}

function toAdmin() {
    if (sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = "index.html";
    }
    else {
        window.location.href = "admin.html";
    }
}

function switchMode() {
    if (document.getElementById('css_file').href.includes('styles_d.css')) {
        sessionStorage.setItem('isDark', false);
        document.getElementById('css_file').href = 'styles.css';
    } else {
        sessionStorage.setItem('isDark', true);
        document.getElementById('css_file').href = 'styles_d.css';
    }
}

window.onload = function() {
    switchbetween();
}
