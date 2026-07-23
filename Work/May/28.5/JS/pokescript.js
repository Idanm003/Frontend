$(document).ready(function () {
  const POKEMON_LIST_URL = "https://pokeapi.co/api/v2/generation/1";
  const POKEMON_DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/";

  const pokemonListEl = $(".pokemonList");
  const welcomeTitleEl = $(".welcomeTitle");

  //1. get all pokemons
  // Fetch and render pokemon list
  $.getJSON(POKEMON_LIST_URL, function (data) {
    data.pokemon_species.forEach((data, idx) => {
      createPokemonItem(data, idx);
    });
  });

  //2. create a pokemons list
  // Create and append single pokemon item to list
  function createPokemonItem(pokemon, idx) {
    const capitalizedPokemonName = capitalizedFirstChar(pokemon.name);

    const pokemonItemEl = $(`<p class='pokemonItem'>Pokemon no. ${idx + 1} </p>`);
    const pokemonLinkEl = $(`<span class='pokemonLink'>${capitalizedPokemonName}</span>`);

    pokemonItemEl.append(pokemonLinkEl);
    pokemonListEl.append(pokemonItemEl);
  }

  //3. get pokemon by name
  // Event: Click a pokemon name to fetch pokemon info
  pokemonListEl.on("click", ".pokemonLink", function () {
    welcomeTitleEl.addClass("hidden");
    const pokemonName = $(this).text();

    const url = POKEMON_DETAILS_URL + pokemonName;
    $.getJSON(url, function (data) {
      createPokemonDetails(data, pokemonName);
    });
  });

  // Capitalized First Char At String
  function capitalizedFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //4. render pokemon details.
  // Render PokemonDetails including image and stats
  function createPokemonDetails(pokemonData, pokemonName) {
    const imageLink = pokemonData.sprites.front_default;

    const pokemonHeaderEl = $(`<h2>${pokemonName}</h2>`);
    const pokemonImageEl = $(`<img class="pokemonImage" src=${imageLink} alt=${pokemonName}/>`);
    const statsWrapperEl = createStatsElement(pokemonData.stats);
    const contentWrapperEl = $("<div class='pokemonContent'></div>");

    contentWrapperEl.append(pokemonImageEl, statsWrapperEl);

    $(".pokemonInfo").empty().append(pokemonHeaderEl, contentWrapperEl);
  }

  // Create Stats section element
  function createStatsElement(stats) {
    const statsEl = $("<div class='pokemonStats'></div>");

    stats.forEach((stat) => {
      const upperCasedStatName = stat.stat.name.toUpperCase();
      const statValue = stat.base_stat;

      const statRowEl = $(
        `<p class='statRow'><span class='statLabel'>${upperCasedStatName}</span>: ${statValue}</p>`,
      );

      statsEl.append(statRowEl);
    });

    return statsEl;
  }
});