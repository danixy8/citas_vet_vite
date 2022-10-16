import Swal from 'sweetalert2';

const deletePatientAlert = (patient, deletePatientFunction) => {
  Swal.fire({
    title: 'Eliminar paciente',
    text: `Estas seguro de eliminar al paciente "${patient.name}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Si, Eliminar',
    cancelButtonColor: '#d33',
    cancelButtonText:'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      deletePatientFunction(patient.id)
      Swal.fire(
        'Operacion exitosa',
        'El paciente fue eliminado',
        'success'
      )
    }
  })
}

export default deletePatientAlert;