// functions.js
// Файл с функциями по типу рандомизатор и прочее




//вспомогательная функция
function putToCache(elem, cache){
	if(cache.indexOf(elem) != -1){
		return;
	}
	var i = Math.floor(Math.random()*(cache.length + 1));
	cache.splice(i, 0, elem);
}
//функция, возвращающая свеженький, девственный компаратор
function madness(){
	var cache = [];
	return function(a, b){
		putToCache(a, cache);
		putToCache(b, cache);
		return cache.indexOf(b) - cache.indexOf(a);
	}
}
//собственно функция перемешивания
function shuffle(arr){
	var compare = madness();
	return arr.sort(compare);
}


// Получить случайный набор Таро.
// num_cards - количество карт
function get_random_card_set(num_cards) {
    // TODO TARO_CARDS - набор карт для перемешивания
    shuffle(TARO_CARDS);

    var cards_set = [];
    for (i=0; i < num_cards; i++){
        cards_set.push(TARO_CARDS[i]);
    }

    return cards_set;
}