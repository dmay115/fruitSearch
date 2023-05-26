const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let typed = ''
const included = new Set();
function search(str) {
	for (let strings of fruit){
		if (strings.toLowerCase().includes(str)){
		included.add(strings)
		}
	}
	results = included

	return showSuggestions(results);
}

function searchHandler(e) {
	if (e.key === 'Backspace') {
		let backspace = typed.slice(0, -1);
		typed = backspace
	} else if (e) {
		typed += e.key
	}
	included.clear()
	suggestions.innerText = ''
	search(typed)
}

function showSuggestions(results) {
	if (typed == ""){
		included.clear()
	}
	for (let str of results){
		const item = document.createElement('ul');
		item.innerText = str
		suggestions.appendChild(item)
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText
	suggestions.innerText = ''
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);