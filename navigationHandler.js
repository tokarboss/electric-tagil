// Обработчик навигации, мобильного меню и таблицы прайс-листа
window.AppHandlers = window.AppHandlers || {};

window.AppHandlers.initNavigationHandler = function() {
    // Мобильное меню
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Таблица прайса и фильтрация категорий (если есть на странице)
    const priceTableBody = document.getElementById('price-table-body');
    const filterButtons = document.querySelectorAll('[data-price-filter]');

    if (priceTableBody) {
        function renderCategory(category) {
            priceTableBody.innerHTML = window.AppFunctions.generatePriceRowsHtml(category);
            filterButtons.forEach(btn => {
                const active = btn.getAttribute('data-price-filter') === category;
                btn.className = active
                    ? 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 text-black transition'
                    : 'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gray-900 text-gray-300 border border-gray-800 hover:border-gray-700 transition';
            });
        }

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                renderCategory(btn.getAttribute('data-price-filter'));
            });
        });

        renderCategory('all');
    }
};
