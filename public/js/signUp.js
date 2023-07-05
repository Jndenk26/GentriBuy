const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#userName').value.trim();
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        throw err;
      }
    }
  };


  document
  .querySelector('.signUp-form')
  .addEventListener('submit', signupFormHandler);
