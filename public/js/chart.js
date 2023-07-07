const ctx = document.getElementById('myChart');

const itemsEl = document.querySelectorAll(".itemPageContainer") 
const itemArr = []
const dataArr = []
itemsEl.forEach(itemEl => {
    console.log(itemEl)
    let name = itemEl.children[0].textContent
    let values = itemEl.children[1].textContent.split(" saved out of $")
    let pledge = values[0].substring(1)
    let cost = values[1]
    let notes = itemEl.children[2].textContent
    itemArr.push({name, cost, notes, pledge})

let percent = (pledge/cost)*100
dataArr.push(percent)
})

console.log(itemArr);
const labels = itemArr.map(function(item, i){
  return 'Period ' + (i+1)
});
const data = {
  labels: labels,
  datasets: [{
    label: 'Financial Progress',
    data: dataArr,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        y: {
          display: true,
          suggestedMin: 0,
          suggestedMax: 100,
        }
      }
    }
  };

const lineChart = new Chart(ctx, config)