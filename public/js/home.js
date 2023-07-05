const addFundsFormHandler = async (event) =>{
    event.preventDefault();

    //checks if adding funds
    if(event.target.id !== 'add') return
    const id = document.querySelector('#homeGreeting').getAttribute('data-id')
    const fundsEl = document.querySelector('#homeFunds')
    const difference = document.querySelector('#fundsInput').value.trim()
    
    //checks if number
    if(isNaN(difference)) return
    const startCapital = fundsEl.getAttribute("data-capital")
     
    const capital = +startCapital + +difference

    //post all numbers involved as a transaction
    const transactionResponse = await fetch('/api/transactions', {
        method: 'POST',
        body: JSON.stringify({ startCapital, difference,capital }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (transactionResponse.ok) {
        
        document.location.replace('/home');
      } else {
        throw err;
      }


      //saves the new total funds of the fntion as the new funds capital
      const fundsResponse = await fetch(`/api/funds/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ capital }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (fundsResponse.ok) {
        
        document.location.replace('/home');
      } else {
        throw err;
      }


}

document
  .querySelector('.fundsControl')
  .addEventListener('click', addFundsFormHandler);