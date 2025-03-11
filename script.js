document.getElementById('create').onclick  = function() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  document.getElementById('log-in').style = "z-index: 100;";
  document.getElementById('create-account').style = "z-index: -100;";
};
document.getElementById('log-in-button').onclick  = function() {
  let logusername = document.getElementById('logusername');
  let logpassword = document.getElementById('logpassword');
  if (username == logusername & password == logpassword){
    window.location.href = 'file:///C:/Users/Timur&Erik/Desktop/login%20page%20better/index.html';
  }
  else {
    window.location.href = 'https://fonts.google.com/selection/embed';
  };
};
document.getElementById('create-min').onclick  = function() {
  document.getElementById('log-in').style = "z-index: -100;";
  document.getElementById('create-account').style = "z-index: 100;";
};
document.getElementById('log-in-min').onclick  = function() {
  document.getElementById('log-in').style = "z-index: 100;";
  document.getElementById('create-account').style = "z-index: -100;";
};