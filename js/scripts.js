///IIFE START
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
///returns the pokemonList array
function getAll() {
    return pokemonList;
};

///adds new data to the pokemonList array
function add(pokemon) {
    pokemonList.push(pokemon);
};

/// Creates pokemon list in document
function addListItem(pokemon) {
  let pkList = document.querySelector('.pokemon-list');
  let pkListItem = document.createElement('li');
  let pkButton = document.createElement('button');
  pkButton.innerText = pokemon.name;
  pkButton.classList.add('pk-button');
  pkListItem.appendChild(pkButton);
  pkList.appendChild(pkListItem);
  pkButton.addEventListener('click', function () {
    showDetails(pokemon);
  });
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
  console.log(pokemon);
});
}

function loadList() {
  return fetch(apiURL).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsURL: item.url
      };
    add(pokemon);
  });
}).catch(function (e) {
  console.error(e);
})
}

function loadDetails(item) {
let url = item.detailsURL;
return fetch(url).then(function (response) {
  return response.json();
}).then(function (details) {
  item.imageUrl = details.sprites.front_default;
  item.height = details.height;
  item.types = details.types;
}).catch(function (e) {
  console.error(e);
});
}
return {
  getAll: getAll,
  add: add,
  addListItem: addListItem
  loadList: loadList,
  loadDetails: loadDetails
};

///End of IIFE
})();

okemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
