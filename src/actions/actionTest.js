

export async function action1(prevState, formData) {
  return prevState + 1;
}

export async function action2(prevState, formData) {

  //simulate the delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const formValues = Object.fromEntries(formData);
  const { username, email } = formValues;

  if (username.length < 3) {
    return {
      status: 'error',
      message: 'process failed',
      usernameErrorMessage: 'username must contain at least 3 character!',
      usernameErrorBorder: true,
      usernameInput: username,
      emailInput: email
    }
  }

  if (!email.includes('@')) {
    return {
      status: 'error',
      message: 'process failed',
      emailErrorMessage: 'check the email format',
      emailErrorBorder: true,
      usernameInput: username,
      emailInput: email
    }
  }

  return {
    status: 'success',
    message: `username updated to ${username}`,
    usernameInput: '',
    emailInput: ''
  }

}