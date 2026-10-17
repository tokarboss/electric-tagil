// Функция генерации HTML-строк таблицы прайс-листа с фильтрацией по категориям
window.AppFunctions = window.AppFunctions || {};

window.AppFunctions.generatePriceRowsHtml = function(categoryFilter = 'all') {
    const list = window.AppConfig.priceList || [];
    const filtered = categoryFilter === 'all'
        ? list
        : list.filter(item => item.category === categoryFilter);

    return filtered.map(item => `
        <tr class="hover:bg-gray-900/40 transition">
            <td class="p-6 font-medium text-white">${item.title}</td>
            <td class="p-6">${item.unit}</td>
            <td class="p-6 text-right font-bold text-amber-400">${item.price}</td>
        </tr>
    `).join('');
};
