document.addEventListener("DOMContentLoaded", () => {

    // OPEN MODALS
    const openButtons = document.querySelectorAll(".openButton");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.showModal();
            }
        });
    });

    // CLOSE MODALS
    const closeButtons = document.querySelectorAll(".closeButton");

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const dialog = button.closest("dialog");

            if (dialog) {
                dialog.close();
            }
        });
    });

    // AUTO TIMESTAMP
    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

});
