
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    for (let index = 0; index <= data.length - 1; index++) {
        var countryName = data[index].name.common;
        var Option = document.createElement('option')
        Option.innerHTML = countryName;
        var Select = document.getElementById('selectCountry');
        Select.appendChild(Option);
    }
    });

var el = document.getElementById('selectCountry');
el.addEventListener('change', Currencies);
el.addEventListener('change', image);

var OptionCu;
var SelectCu;
function Currencies() {
    if (document.getElementById('selectCurrency').value == 0){
      _Currency();
    }else {
      SelectCu.removeChild(OptionCu);
      _Currency();
    }
}

function _Currency () {
  var count;
  fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
      for (i = 0; i < data.length; i++) {
      if (document.getElementById("selectCountry").value == data[i].name.common) {
          var sCountry = data[i].name.common;
          count = i;
      }
      }
      OptionCu = document.createElement('option')
      OptionCu.innerHTML = Object.keys(data[count].currencies);
      SelectCu = document.getElementById('selectCurrency');
      SelectCu.appendChild(OptionCu);
    });
}

var img;
function image () {
  var count;
  fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
  for (i = 0; i < data.length; i++) {
    if (document.getElementById("selectCountry").value == data[i].name.common) {
        var sCountry = data[i].name.common;
        count = i;
    }
    }
  document.getElementById('flag').src = data[count].flags.png;
  });
}


fetch('https://restcountries.com/v3.1/all')
   .then((response) => response.json())
   .then((data) => console.log(data));

function ExchangeRate(){
  console.log("function")
   var selectedCurrency = document.getElementById('selectCurrency').value;
   var URL = 'https://api.fastforex.io/fetch-multi?from=' + selectedCurrency + '&to=USD&api_key=44f6199b5e-09d8d7c00a-rq6qpw'
   fetch(URL)
      .then(response => response.json())
      .then(response => {
        _exchangRate = response.results.USD;
        _amount = document.getElementById('Amount').value;
        _ExchangedAmount = _amount * _exchangRate;
        document.getElementById('ExchangeAmount').innerHTML = _ExchangedAmount.toFixed(2) + "$";
      });
}