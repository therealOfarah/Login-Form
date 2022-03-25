const username = getElementsByClassName('Username');
const password = getElementsByClassName('Password');
const button = getElementsByClassName('Log_In');

button.addEventListener('click'e=>){

  e.preventDefualt();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username ==='user' && password==='pass'){
    alert("You have successfully logged in.");
        location.reload();

  }else {

  }
}
