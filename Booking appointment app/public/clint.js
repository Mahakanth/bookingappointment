document.addEventListener("DOMContentLoaded", function () {
    function editAppointment(index) {
        const editedAppointment = {
            name: "Edited Name",
            date: "2023-09-17",
            time: "3:00 PM",
        };

        const appointmentItem = document.getElementById(`appointment-${index}`);
        appointmentItem.textContent = `Name: ${editedAppointment.name}, Date: ${editedAppointment.date}, Time: ${editedAppointment.time}`;
    }

    function deleteAppointment(index) {
        const appointmentItem = document.getElementById(`appointment-${index}`);
        appointmentItem.remove();
    }

    appointmentList.addEventListener("click", function (e) {
        if (e.target.classList.contains("edit-button")) {
            const index = e.target.dataset.index;
            editAppointment(index);
        } else if (e.target.classList.contains("delete-button")) {
            const index = e.target.dataset.index;
            deleteAppointment(index);
        }
    });
});
