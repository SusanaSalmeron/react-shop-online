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

export const popUpAlertWithConfirmation = async (title, text, icon, confirmButtonText) => {
    await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your address has been deleted.',
                'success'
            )
        }
    })
}