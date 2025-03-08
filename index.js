$(document).ready(function () {
    $('.fb-link').attr('href', 'https://www.facebook.com');
    $('.google-link').attr('href', 'https://www.google.com');


    $('#login-button').click(function (event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === '') {
            $('#username').css('border', '2px solid red');
        } else {
            $('#username').css('border', '');
        }

        if (password === '') {
            $('#password').css('border', '2px solid red');
        } else {
            $('#password').css('border', '');
        }

        if (username !== '' && password !== '') {
            alert('Login successful');
        } else {
            alert('Please enter both username and password');
        }
    });
});

