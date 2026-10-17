// Главная точка входа: инициализация всех обработчиков после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    if (window.AppHandlers) {
        if (typeof window.AppHandlers.initCityHandler === 'function') {
            window.AppHandlers.initCityHandler();
        }
        if (typeof window.AppHandlers.initCalculatorHandler === 'function') {
            window.AppHandlers.initCalculatorHandler();
        }
        if (typeof window.AppHandlers.initNavigationHandler === 'function') {
            window.AppHandlers.initNavigationHandler();
        }
        if (typeof window.AppHandlers.initModalHandler === 'function') {
            window.AppHandlers.initModalHandler();
        }
    }
});
