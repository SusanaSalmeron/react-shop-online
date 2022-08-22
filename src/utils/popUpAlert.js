import Swal from 'sweetalert2';

export const popUpAlert = async (position, icon, title, showConfirmButton, timer) => {
    await Swal.fire({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: showConfirmButton,
        timer: timer
    })
}