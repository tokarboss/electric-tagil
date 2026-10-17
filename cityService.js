// Функции работы с выбранным городом и географией выезда
window.AppFunctions = window.AppFunctions || {};

window.AppFunctions.getSelectedCityKey = function() {
    return localStorage.getItem('electric_selected_city') || 'ntagil';
};

window.AppFunctions.setSelectedCityKey = function(cityKey) {
    if (window.AppConfig.cities[cityKey]) {
        localStorage.setItem('electric_selected_city', cityKey);
    }
    return window.AppFunctions.getCityData(cityKey);
};

window.AppFunctions.getCityData = function(cityKey) {
    const key = cityKey || window.AppFunctions.getSelectedCityKey();
    return window.AppConfig.cities[key] || window.AppConfig.cities.ntagil;
};
