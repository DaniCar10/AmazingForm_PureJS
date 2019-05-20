function validateEmail()
{
  let email = document.getElementById('fieldEmail').value;

  if (email.length == 0)
  {
    labelShow('Ei, não esqueça do e-mail!', 'email_Prompt', '#ff3838');
    return false;
  }

  else if (!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))
  {
    labelShow('Inscreva um e-mail válido, por favor!', 'email_Prompt', '#ff3838');
    return false;
  }

  else
  {
    labelShow('E-mail ok!', 'email_Prompt', '#218c74');
    return true;
  }
}


function validatePassword()
{
  let password = document.getElementById('fieldPassword').value;

  if (password.length == 0)
  {
    labelShow('Ei, não esqueça da senha!', 'password_Prompt', '#ff3838');
    return false;
  }

  // 8 characters and at least one number, one letter and one unique character such as !#$%&?
  //dani!101
  else if (!password.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&@? "]).*$/))
  {
    labelShow('Pelo menos 8 digitos, sendo pelo menos um número, uma letra e um caracter especial. Exemplo: abcd!1234', 'password_Prompt', '#ff3838');
    return false;
  }

  else
  {
    labelShow('Senha aprovada!', 'password_Prompt', '#218c74');
    return true;
  }
}


function submitFunction() {
  event.preventDefault();
  if (validateEmail() & validatePassword())
  {
    document.getElementById('success_message').style.display = 'block';
    console.log('ok!')
  } else {
    document.getElementById('success_message').style.display = 'none';
    console.log('not ok!');
  }
  }


function labelShow(message, messageLocation, color)
{
  document.getElementById(messageLocation).innerHTML = message;
  document.getElementById(messageLocation).style.color = color;
}
