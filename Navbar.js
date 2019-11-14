function LoginPopUp(){
$('#LoginModal').modal('toggle');
}

document.writeln("<nav class = 'Navbar'><a href = 'index.html' class = 'nav-link'>BUCLE</a><a href = 'index.html' class = 'subnav-link'>Organizations</a><a href = 'Agendas.html' class = 'subnav-link'>Agendas</a><a href = 'Meetings.html' class = 'subnav-link'>Meetings</a><a onclick = 'LoginPopUp()' id = 'loginButton' href = '#'class = 'nav-link' style = 'float: right;'>Login</a></nav>");
