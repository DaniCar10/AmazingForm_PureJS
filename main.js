function validateName()
{
  let name = document.getElementById('fieldName').value;

  if (name.length == 0)
  {
    labelShow('Ei, não esqueça do seu nome!', 'namePrompt', '#ff3838');
    return false;
  }
  else if (!name.match(/^[a-zA-Z]{2,}$/))
  {
    labelShow('Inscreva um nome válido, por favor!', 'namePrompt', '#ff3838');
    return false;
  }

  else { labelShow('Oi, ' + name, 'namePrompt', '#218c74');
  return true;
  }
}


function validateLastName()
{
  let last_name = document.getElementById('fieldLastName').value;

  if (last_name.length == 0)
  {
    labelShow('Ei, não esqueça do seu sobrenome!', 'last_namePrompt', '#ff3838');
    return false;
  }
  else if (!last_name.match(/^[a-zA-Z]{2,}$/))
  {
    labelShow('Inscreva um nome válido, por favor!', 'last_namePrompt', '#ff3838');
    return false;
  }

  else
  {
    labelShow('Sobrenome validado', 'last_namePrompt', '#218c74');
    return true;
  }
}

function validateDDD()
{
  let ddd = document.getElementById('fieldDDD').value;

  if (ddd.length == 0)
  {
    labelShow('Ei, não esqueça do DDD!', 'ddd_Prompt', '#ff3838');
    return false;
  }

  else if (!ddd.match(/^[0-9][0-9]$/))
  {
    labelShow('Inscreva um DDD válido, por favor!', 'ddd_Prompt', '#ff3838');
    return false;
  }

  else
  {
    labelShow('DDD ok!', 'ddd_Prompt', '#218c74');
    return true;
  }
}


function validatePhone()
{
  let phone = document.getElementById('fieldPhone').value;

  if (phone.length == 0)
  {
    labelShow('Ei, não esqueça do telefone!', 'phone_Prompt', '#ff3838');
    return false;
  }

  else if (!phone.match(/^[0-9]{4,5}-?[0-9]{4}$/))
  {
    labelShow('Inscreva um telefone válido, por favor!', 'phone_Prompt', '#ff3838');
    return false;
  }

  else
  {
    labelShow('Telefone ok!', 'phone_Prompt', '#218c74');
    return true;
  }
}


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


function validatePassword2()
{
  let password = document.getElementById('fieldPassword').value;
  let password2 = document.getElementById('fieldPassword2').value;

  if (password2 != password || password2 == '') {
      {
        labelShow('Ei, as senhas são incompatíveis', 'password_Prompt2', '#ff3838');
        return false;
      }
  }

   else
  {
    labelShow('Senha checada!', 'password_Prompt2', '#218c74');
        return true;
  }
}

function submitFunction() {
  event.preventDefault();
  if (validateName() & validateLastName() & validateDDD() & validatePhone() & validateEmail() & validatePassword() & validatePassword2())
  {
    document.getElementById('success_message').style.display = 'block';
  } else {
    document.getElementById('success_message').style.display = 'none';
  }
  }


function labelShow(message, messageLocation, color)
{
  document.getElementById(messageLocation).innerHTML = message;
  document.getElementById(messageLocation).style.color = color;
}
