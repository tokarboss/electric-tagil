// Обработчик событий интерактивного калькулятора сметы
window.AppHandlers = window.AppHandlers || {};

window.AppHandlers.initCalculatorHandler = function() {
    const calcRoot = document.getElementById('calculator-app');
    if (!calcRoot) return;

    const state = {
        type: 'flat',
        area: 65,
        shield: true,
        smart: false
    };

    const typeButtons = calcRoot.querySelectorAll('[data-calc-type]');
    const areaInput = calcRoot.querySelector('#calc-area-input');
    const areaBadge = calcRoot.querySelector('#calc-area-badge');
    const shieldCheckbox = calcRoot.querySelector('#calc-shield-checkbox');
    const smartCheckbox = calcRoot.querySelector('#calc-smart-checkbox');

    const summaryType = calcRoot.querySelector('#summary-type');
    const summaryArea = calcRoot.querySelector('#summary-area');
    const summaryShield = calcRoot.querySelector('#summary-shield');
    const summarySmart = calcRoot.querySelector('#summary-smart');
    const summaryTotal = calcRoot.querySelector('#summary-total');

    function updateUI() {
        const result = window.AppFunctions.calculateEstimate(state);

        // Обновляем кнопки типа помещения
        typeButtons.forEach(btn => {
            const isSelected = btn.getAttribute('data-calc-type') === state.type;
            btn.className = isSelected
                ? 'py-3 px-4 rounded-xl text-sm transition bg-amber-500 text-black font-bold'
                : 'py-3 px-4 rounded-xl text-sm transition bg-gray-900 text-gray-300 border border-gray-800 hover:border-gray-700';
        });

        // Обновляем ползунок и бейдж площади
        if (areaBadge) areaBadge.textContent = `${state.area} м²`;
        if (areaInput && Number(areaInput.value) !== state.area) {
            areaInput.value = state.area;
        }

        // Обновляем сводку сметы
        if (summaryType) summaryType.textContent = result.typeLabel;
        if (summaryArea) summaryArea.textContent = result.areaText;
        if (summaryShield) summaryShield.textContent = result.shieldText;
        if (summarySmart) summarySmart.textContent = result.smartText;
        if (summaryTotal) summaryTotal.textContent = result.formattedTotal;

        // Сохраняем текущий расчет для подстановки в форму заявки
        window.currentEstimateSummary = `${result.typeLabel}, ${result.areaText}, Щит: ${result.shieldText}, Автоматика: ${result.smartText} (~${result.formattedTotal} ₽)`;
    }

    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            state.type = btn.getAttribute('data-calc-type');
            updateUI();
        });
    });

    if (areaInput) {
        areaInput.addEventListener('input', (e) => {
            state.area = Number(e.target.value);
            updateUI();
        });
    }

    if (shieldCheckbox) {
        shieldCheckbox.addEventListener('change', (e) => {
            state.shield = e.target.checked;
            updateUI();
        });
    }

    if (smartCheckbox) {
        smartCheckbox.addEventListener('change', (e) => {
            state.smart = e.target.checked;
            updateUI();
        });
    }

    updateUI();
};
