function checkCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == 'Admin' && password == 'Admin123') {
        document.getElementById('loginStatus').innerText = 'AdminLogin:Allowed';
    }
    else if (username == 'User' && password == 'User123')
    {
        document.getElementById('loginStatus').innerText = 'UserLogin:Allowed';
    }
    else
    {
        document.getElementById('loginStatus').innerText = 'Error';
    }
}