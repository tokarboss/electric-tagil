// Справочник данных: города выезда, тарифы калькулятора и позиции прайс-листа
window.AppConfig = {
    phone: '+7 (950) 659-57-85',
    phoneRaw: '+79506595785',
    cities: {
        ntagil: {
            name: 'Нижний Тагил',
            namePrepositional: 'Нижнем Тагиле',
            deliveryText: 'Бесплатно по Тагилу',
            distanceKm: 0,
            travelFee: 0
        },
        vsalda: {
            name: 'Верхняя Салда',
            namePrepositional: 'Верхней Салде',
            deliveryText: 'Выезд ~45 км (по договоренности)',
            distanceKm: 45,
            travelFee: 1500
        },
        nsalda: {
            name: 'Нижняя Салда',
            namePrepositional: 'Нижней Салде',
            deliveryText: 'Выезд ~60 км (по договоренности)',
            distanceKm: 60,
            travelFee: 2000
        },
        kushva: {
            name: 'Кушва',
            namePrepositional: 'Кушве',
            deliveryText: 'Выезд ~50 км (по договоренности)',
            distanceKm: 50,
            travelFee: 1500
        },
        nevjansk: {
            name: 'Невьянск',
            namePrepositional: 'Невьянске',
            deliveryText: 'Выезд ~50 км (по договоренности)',
            distanceKm: 50,
            travelFee: 1500
        },
        krasnouralsk: {
            name: 'Красноуральск',
            namePrepositional: 'Красноуральске',
            deliveryText: 'Выезд ~70 км (по договоренности)',
            distanceKm: 70,
            travelFee: 2200
        },
        kirovgrad: {
            name: 'Кировград',
            namePrepositional: 'Кировграде',
            deliveryText: 'Выезд ~75 км (по договоренности)',
            distanceKm: 75,
            travelFee: 2500
        },
        chernoistochinsk: {
            name: 'Черноисточинск',
            namePrepositional: 'Черноисточинске',
            deliveryText: 'Выезд ~25 км (бесплатно при заказе)',
            distanceKm: 25,
            travelFee: 800
        }
    },
    calculatorRates: {
        types: {
            flat: { label: 'Квартира', ratePerSqm: 1400 },
            house: { label: 'Коттедж', ratePerSqm: 1800 },
            commercial: { label: 'Коммерция', ratePerSqm: 2200 }
        },
        options: {
            shield: { label: 'Сборка силового щита с защитой', price: 18000 },
            smart: { label: 'Слаботочные системы и автоматика', price: 25000 }
        }
    },
    priceList: [
        { category: 'wall', title: 'Штробление стен под проводку (бетон/кирпич)', unit: 'п.м.', price: 'от 250 ₽' },
        { category: 'wall', title: 'Установка подрозетника с высверливанием', unit: 'шт.', price: 'от 350 ₽' },
        { category: 'cable', title: 'Монтаж кабеля в гофре / открыто', unit: 'п.м.', price: 'от 90 ₽' },
        { category: 'cable', title: 'Прокладка силового кабеля ВВГнг-LS в штробе', unit: 'п.м.', price: 'от 120 ₽' },
        { category: 'shield', title: 'Профессиональная сборка силового электрощита', unit: 'модуль / щит', price: 'от 6 500 ₽' },
        { category: 'shield', title: 'Установка и настройка реле контроля напряжения', unit: 'шт.', price: 'от 1 500 ₽' },
        { category: 'shield', title: 'Монтаж контура заземления с замером сопротивления', unit: 'компл.', price: 'от 8 500 ₽' },
        { category: 'fittings', title: 'Установка розеток и выключателей (чистовая)', unit: 'шт.', price: 'от 250 ₽' },
        { category: 'fittings', title: 'Монтаж светодиодных лент с блоком питания и профилем', unit: 'п.м.', price: 'от 600 ₽' }
    ]
};
