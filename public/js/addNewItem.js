const newFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#itemName').value.trim();
    const cost = document.querySelector('#itemCost').value.trim();
    const notes = document.querySelector('#itemNotes').value.trim();
  
    if (name && cost && notes) {
      const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({ name, cost, notes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        throw new Error(`Couldn't post item`);
      }
    }
  };
  
  document
    .querySelector('.newItemForm')
    .addEventListener('submit', newFormHandler);