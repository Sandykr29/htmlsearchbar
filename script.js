// script.js

const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');
const suggestionsList = document.getElementById('suggestions-list');
const dropdownContainer = document.getElementById('dropdown-container');

// Load countries from JSON file
let countries = [];
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    countries = data;
  });


