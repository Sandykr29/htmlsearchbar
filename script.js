

const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');
const suggestionsList = document.getElementById('suggestions-list');
const dropdownContainer = document.getElementById('dropdown-container');

// Load countries from JSON file
let countries = [];
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    countries = data;
  });

// Function to clear search input and hide dropdown
function clearSearch() {
    searchInput.value = '';
    suggestionsList.innerHTML = '';
    dropdownContainer.style.display = 'none';
  }
  
  // handle search logic
  function handleSearch() {
    const searchText = searchInput.value.toLowerCase();
    const filteredCountries = countries.filter(country => country.countryName.toLowerCase().includes(searchText));
    displaySuggestions(filteredCountries);
  }
  
  // display search
  function displaySuggestions(suggestions) {
    suggestionsList.innerHTML = '';
    suggestions.slice(0, 5).forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion.countryName;
      suggestionsList.appendChild(li);
    });
    dropdownContainer.style.display = suggestions.length > 0 ? 'block' : 'none';
  }
  
  // Event-listeners
  searchInput.addEventListener('input', () => {
    debounce(handleSearch, 300)();
  });
  
  clearButton.addEventListener('click', clearSearch);
  
  // Debounce function
  function debounce(func, delay) {
    let timeoutId;
    return function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
  