import Swal from 'sweetalert2';
import deletePatientAlert from '../utils/alerts';

const Patient = ({patient, setPatient, deletePatient}) => {

  const {name, owner, email, date, symptom, id} = patient

  const handleDelete = (patient) => {

    deletePatientAlert(patient, deletePatient)

  }

  return (
    
    <div className="mx-5 mt-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">{symptom}
        </span>
      </p>

      <div className='flex justify-between mt-10'>
        <button
          type="button"
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-xl'
          onClick={() => setPatient(patient)}
        >Editar  
        </button>

        <button
          type="button"
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-xl'
          onClick={() => handleDelete(patient)}
        >Eliminar  
        </button>
      </div>
    </div>
  )
}

export default Patient