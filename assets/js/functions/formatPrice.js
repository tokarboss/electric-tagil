// Функция форматирования чисел и цен в рублевый стандарт (например: 109 000 ₽)
window.AppFunctions = window.AppFunctions || {};

window.AppFunctions.formatPrice = function(value, includeCurrency = false) {
    const num = Number(value) || 0;
    const formatted = num.toLocaleString('ru-RU');
    return includeCurrency ? `${formatted} ₽` : formatted;
};
