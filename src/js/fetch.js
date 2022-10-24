// export function fetchCountries(name) {
//   const url = 'https://pixabay.com/api/';
//   const filter = '?fields=name,capital,population,flags,languages';
//   const KEY = 30833881 - '30833881-2a0b5d994d787ba4a8b90c425';
//   return fetch(`${url}${name}${filter}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// }

export function fetchImages(name) {
  var API_KEY = '30833881-2a0b5d994d787ba4a8b90c425';
  var URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent('red roses');
  $.getJSON(URL, function (data) {
    if (parseInt(data.totalHits) > 0)
      $.each(data.hits, function (i, hit) {
        console.log(hit.pageURL);
      });
    else console.log('No hits');
  });
}
