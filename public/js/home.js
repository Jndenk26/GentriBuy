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
  
      if (!transactionResponse.ok) {
      
        throw new Error(`Couldn't post transaction`);
      }


      //saves the new total funds of the fntion as the new funds capital
      const fundsResponse = await fetch(`/api/funds/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ capital }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!fundsResponse.ok) {
        throw new Error(`Couldn't post funds`);
        
      }
      
      if(fundsResponse.ok & transactionResponse.ok){
        document.location.replace(`/home`);
      }

}

const subtractFundsFormHandler = async (event) =>{
  event.preventDefault();

  //checks if adding funds
  if(event.target.id !== 'subtract') return
  const id = document.querySelector('#homeGreeting').getAttribute('data-id')
  const fundsEl = document.querySelector('#homeFunds')
  const difference = document.querySelector('#fundsInput').value.trim()
  
  //checks if number
  if(isNaN(difference)) return
  const startCapital = fundsEl.getAttribute("data-capital")
   
  const capital = +startCapital - +difference

  if(capital < 0) return
  
  //post all numbers involved as a transaction
  const transactionResponse = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({ startCapital, difference,capital }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!transactionResponse.ok) {
      
      throw new Error(`Couldn't post transaction`);
    }


    //saves the new total funds of the fntion as the new funds capital
    const fundsResponse = await fetch(`/api/funds/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ capital }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!fundsResponse.ok) {
      throw new Error(`Couldn't post funds`);
      
    }

    if(fundsResponse.ok & transactionResponse.ok){
      document.location.replace(`/home`);
    }
}
document
  .querySelector('.fundsControl')
  .addEventListener('click', addFundsFormHandler);

document
.querySelector('.fundsControl')
.addEventListener('click', subtractFundsFormHandler);