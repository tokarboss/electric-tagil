// Функция расчета сметы электромонтажных работ по заданным параметрам
window.AppFunctions = window.AppFunctions || {};

window.AppFunctions.calculateEstimate = function(params) {
    const config = window.AppConfig.calculatorRates;
    const typeKey = params.type || 'flat';
    const area = Math.max(10, Number(params.area) || 65);
    const includeShield = Boolean(params.shield);
    const includeSmart = Boolean(params.smart);

    const typeInfo = config.types[typeKey] || config.types.flat;
    let total = area * typeInfo.ratePerSqm;

    if (includeShield) {
        total += config.options.shield.price;
    }
    if (includeSmart) {
        total += config.options.smart.price;
    }

    return {
        rawTotal: total,
        formattedTotal: window.AppFunctions.formatPrice(total, false),
        typeLabel: typeInfo.label,
        areaText: `${area} кв.м`,
        shieldText: includeShield ? 'Включено' : 'Нет',
        smartText: includeSmart ? 'Включено' : 'Нет'
    };
};
