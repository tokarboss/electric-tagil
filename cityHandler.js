// Обработчик переключения города в шапке и в блоке географии
window.AppHandlers = window.AppHandlers || {};

window.AppHandlers.initCityHandler = function() {
    const citySelects = document.querySelectorAll('.js-city-select');
    const heroCityName = document.getElementById('hero-city-name');
    const heroDeliveryText = document.getElementById('hero-delivery-text');
    const cityBadges = document.querySelectorAll('[data-city-key]');

    function applyCityToDOM(cityKey) {
        const cityData = window.AppFunctions.setSelectedCityKey(cityKey);

        citySelects.forEach(select => {
            if (select.value !== cityKey && select.querySelector(`option[value="${cityKey}"]`)) {
                select.value = cityKey;
            }
        });

        if (heroCityName) {
            heroCityName.textContent = cityData.namePrepositional;
        }
        if (heroDeliveryText) {
            heroDeliveryText.textContent = cityData.deliveryText;
        }

        cityBadges.forEach(badge => {
            const isCurrent = badge.getAttribute('data-city-key') === cityKey;
            badge.className = isCurrent
                ? 'cursor-pointer bg-amber-500 text-black border border-amber-400 px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-amber-500/20 transition'
                : 'cursor-pointer bg-gray-900 hover:bg-gray-800 border border-gray-800 px-6 py-3 rounded-xl text-sm font-semibold text-white transition';
        });
    }

    citySelects.forEach(select => {
        select.addEventListener('change', (e) => {
            applyCityToDOM(e.target.value);
        });
    });

    cityBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            const key = badge.getAttribute('data-city-key');
            applyCityToDOM(key);
        });
    });

    // Инициализация сохраненного города при загрузке
    applyCityToDOM(window.AppFunctions.getSelectedCityKey());
};
