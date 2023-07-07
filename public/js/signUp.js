const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#userName').value.trim();
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();
  
    if (name && email && password) {
      const userResponse = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!userResponse.ok) {
        throw new Error(`Couldn't signUp`);
      }

      const fundsResponse = await fetch('/api/funds', {
        method: 'POST',
        body: JSON.stringify({ capital: 0 }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!fundsResponse.ok) {
        throw new Error(`Couldn't Setup funds`);
      }

      const transactionsResponse = await fetch('/api/transactions', {
        method: 'POST',
        body: JSON.stringify({ startCapital: 0, difference: 0, capital: 0 }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!transactionsResponse.ok) {
        throw new Error(`Couldn't Setup Transactions`);
      }

      if(transactionsResponse.ok & fundsResponse.ok & fundsResponse.ok){
        document.location.replace('/home');
      }
    }
  };


  document
  .querySelector('.signUp-form')
  .addEventListener('submit', signupFormHandler);
