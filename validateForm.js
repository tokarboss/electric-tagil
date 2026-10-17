// Функция валидации формы заявки / вызова мастера на замер
window.AppFunctions = window.AppFunctions || {};

window.AppFunctions.validateLeadForm = function(formData) {
    const name = (formData.name || '').trim();
    const phone = (formData.phone || '').trim();
    const cleanDigits = phone.replace(/\D/g, '');

    if (name.length < 2) {
        return { valid: false, error: 'Пожалуйста, укажите ваше имя (минимум 2 символа).' };
    }
    if (cleanDigits.length < 10) {
        return { valid: false, error: 'Введите корректный номер телефона (минимум 10 цифр).' };
    }
    return { valid: true, error: null };
};
