// Обработчик модального окна вызова мастера и отправки формы заявки
window.AppHandlers = window.AppHandlers || {};

window.AppHandlers.initModalHandler = function() {
    const modal = document.getElementById('lead-modal');
    const openButtons = document.querySelectorAll('.js-open-modal');
    const closeButtons = document.querySelectorAll('.js-close-modal');
    const form = document.getElementById('lead-form');
    const errorBox = document.getElementById('lead-form-error');
    const successBox = document.getElementById('lead-form-success');
    const estimatePreview = document.getElementById('modal-estimate-preview');

    if (!modal) return;

    function openModal() {
        if (estimatePreview) {
            estimatePreview.textContent = window.currentEstimateSummary || 'Выезд инженера на замер и консультацию';
        }
        if (errorBox) errorBox.classList.add('hidden');
        if (successBox) successBox.classList.add('hidden');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    openButtons.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    }));

    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: form.querySelector('[name="client_name"]')?.value,
                phone: form.querySelector('[name="client_phone"]')?.value,
                comment: form.querySelector('[name="client_comment"]')?.value
            };

            const validation = window.AppFunctions.validateLeadForm(formData);
            if (!validation.valid) {
                if (errorBox) {
                    errorBox.textContent = validation.error;
                    errorBox.classList.remove('hidden');
                }
                return;
            }

            if (errorBox) errorBox.classList.add('hidden');
            if (successBox) {
                successBox.textContent = `Спасибо, ${formData.name}! Заявка принята. Мастер свяжется с вами по номеру ${formData.phone}.`;
                successBox.classList.remove('hidden');
            }
            form.reset();
        });
    }
};
