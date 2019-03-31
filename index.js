const urlGoogle = 'https://www.google.com/search?source=hp&ei=1eqgXIriHquwrgTL9I6ABw&q';

const urlYahoo = 'http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=YahooDemo&output=json&query=';

const buttonSearch = document.getElementsByClassName('buttonSearch')[0];
buttonSearch.addEventListener("click", search);
let valueSearch;

function loadResult() {
    console.log(urlYahoo+valueSearch+'&results=1');
    const options = { method: 'GET'};
    fetch(urlYahoo+valueSearch+'&results=1', options)
        .then(function(response) {
            console.log(response.headers.get('Content-Type'));
            console.log(response.status);
            return response.json();
        })
        .then(function(user) {
            console.log(user.name);
        })
        .catch( (error) => {console.log('error:', error)});
}

function view() {
    console.log('view')
}


function search() {
    valueSearch = document.getElementsByClassName('inputValue')[0].value;
    console.log('valueSearch:', valueSearch);
    loadResult();
}
