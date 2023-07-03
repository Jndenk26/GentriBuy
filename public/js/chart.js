const ctx = document.getElementById('myChart');

const itemsEl = document.querySelectorAll(".itemPageContainer") 
const itemArr = []
itemsEl.forEach(itemEl => {
    console.log(itemEl)
    let name = itemEl.childNodes[0].textContent
    let cost = itemEl.childNodes[1].textContent.split("of $")[1]
    // let pledge
    let notes = itemEl.childNodes[2].textContent
    itemArr.push({name, cost, notes})
})

console.log(itemArr);
const labels = ['Period 1', 'Period 2', 'Period 3', 'Period 4'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Financial Progress',
    data: [5, 20, 22.4, 23.08],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
    type: 'line',
    data: data,
  };

const lineChart = new Chart(ctx, config)