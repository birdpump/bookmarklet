javascript: (function() { 
alert("Enter message after following prompt");
var a = prompt("Enter message", "");
alert(a);
var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://crapchat.epizy.com/test.php', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: a
}));
alert(Date());})()
