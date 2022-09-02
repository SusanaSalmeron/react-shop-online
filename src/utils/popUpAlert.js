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

export const popUpAlertWithConfirmation = async (title, text, icon, confirmButtonText, text2, text3) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
    }).then((result) => {
        console.log(result)
        console.log(Swal.DismissReason.cancel)
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                text2,
                'success'
            )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                text3,
                'error'
            )
        }
    })
}