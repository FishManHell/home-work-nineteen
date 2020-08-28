const div = document.querySelector('div');

const button = document.querySelector('button');

const makeRequest = () => {
  
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", true);
  xhttp.send();
 
  xhttp.addEventListener('readystatechange', () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const arr = JSON.parse(xhttp.response);
      div.innerText = arr[0].sale + '/' + arr[0].buy;
    }
  })
}

button.addEventListener('click', makeRequest);