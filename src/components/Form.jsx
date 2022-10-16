import {useState, useEffect} from 'react';
import Error from './Error';
function Form({patients, setPatients, patient, setPatient}) {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0){
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptom(patient.symptom)
    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random+date
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    //validacion del form
    if([name, owner, email, date, symptom].includes('')){
      setError(true)
      return;
    }

    setError(false)

    //objeto paciente

    const objectPatient = {
      name,
      owner,
      email,
      date,
      symptom
    }

    if(patient.id){
      //edit patient
      objectPatient.id = patient.id
      
      const updatedPatients = patients.map(patientState => patientState.id == patient.id ? objectPatient : patientState)

      setPatients(updatedPatients)
      setPatient({})

    }else{
      //new patient
      objectPatient.id = generateId()
      setPatients([...patients, objectPatient])
    }


    //reiniciar el form
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptom('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Anade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      onSubmit={handleSubmit}>

      {
        error && <Error><p>Todos los campos son obligatorios</p></Error>
      }

        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nombre de las mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase">
            Nombre Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e)=> setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase">
            Fecha de alta
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="describe sintomas"
            value={symptom}
            onChange={(e)=> setSymptom(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-indigo-700 cursor-pointer transition-all"
          value={ patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Form
