const addFundsFormHandler = async (event) =>{
  event.preventDefault();

  //checks if adding funds
  if(event.target.id !== 'add') return

  const difference = document.querySelector('#fundsInput').value.trim()
  
  //checks if number
  if(isNaN(difference)) return
  const fundsEl = document.querySelector('#itemsFunds')
  const itemNameEl = document.querySelector('#itemName')
  const pledgedEl = document.querySelector('#pledged')


  const fundsId = fundsEl.getAttribute('data-id')
  const itemId = itemNameEl.getAttribute('data-id')
  const startCapital = fundsEl.getAttribute("data-capital")
  const startPledged = pledgedEl.getAttribute("data-pledged")
  const itemCost = pledgedEl.getAttribute("data-cost")
   
  const capital = +startCapital - +difference

  const pledged = +startPledged + +difference

  if(capital < 0) return

  if(pledged > itemCost) return
  //post all numbers involved as a transaction
  const transactionResponse = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({ startCapital, difference,capital }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!transactionResponse.ok) {
      
      throw new Error(`Couldn't post transaction`);
    }

    const itemResponse = await fetch(`/api/items/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify({ pledged }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!itemResponse.ok) {
      throw new Error(`Couldn't post pledged`);
      
    }

    //saves the new total funds of the fntion as the new funds capital
    const fundsResponse = await fetch(`/api/funds/${fundsId}`, {
      method: 'PUT',
      body: JSON.stringify({ capital }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!fundsResponse.ok) {
      throw new Error(`Couldn't post funds`);
      
    }

    if(fundsResponse.ok & itemResponse.ok & transactionResponse.ok){
      document.location.replace(`/home/item/${itemId}`);
    }



}


const subtractFundsFormHandler = async (event) =>{
  event.preventDefault();

  //checks if adding funds
  if(event.target.id !== 'subtract') return

  const difference = document.querySelector('#fundsInput').value.trim()
  
  //checks if number
  if(isNaN(difference)) return
  const fundsEl = document.querySelector('#itemsFunds')
  const itemNameEl = document.querySelector('#itemName')
  const pledgedEl = document.querySelector('#pledged')


  const fundsId = fundsEl.getAttribute('data-id')
  const itemId = itemNameEl.getAttribute('data-id')
  const startCapital = fundsEl.getAttribute("data-capital")
  const startPledged = pledgedEl.getAttribute("data-pledged")
   
  const capital = +startCapital + +difference

  const pledged = +startPledged - +difference

  if(pledged < 0) return

  //post all numbers involved as a transaction
  const transactionResponse = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({ startCapital, difference,capital }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (transactionResponse.ok) {
      
      document.location.replace(`/home/item/${itemId}`);
    } else {
      throw err;
    }

    const itemResponse = await fetch(`/api/items/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify({ pledged }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (itemResponse.ok) {
      
      document.location.replace(`/home/item/${itemId}`);
    } else {
      throw err;
    }

    //saves the new total funds of the fntion as the new funds capital
    const fundsResponse = await fetch(`/api/funds/${fundsId}`, {
      method: 'PUT',
      body: JSON.stringify({ capital }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (fundsResponse.ok) {
      
      document.location.replace(`/home/item/${itemId}`);
    } else {
      throw err;
    }


}

document
  .querySelector('.fundsControl')
  .addEventListener('click', addFundsFormHandler);

document
  .querySelector('.fundsControl')
  .addEventListener('click', subtractFundsFormHandler);