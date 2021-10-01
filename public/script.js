const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  fetch('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players')
  .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //getresults(input.value);
    });
  event.preventDefault();
  
  
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();

  let i = 1
  data.forEach(element => {
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td2 = document.createElement("td")
    let th = document.createElement("th")

    th.appendChild(i)
    td.appendChild(element[0].first_name + " " + element[0].last_name)
    td2.appendChild(element[1].first_name + " " + element[1].last_name)

    tr.appendChild(th)
    tr.appendChild(td)
    tr.appendChild(td2)
    tbody.appendChild(tr)

    i++
  });


  console.log(data)
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


