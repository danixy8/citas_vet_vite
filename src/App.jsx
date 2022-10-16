import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"
import {useState, useEffect} from 'react';

function App() {

  const initialState = () => JSON.parse(localStorage.getItem("patients")) || [];
  const [patients, setPatients] = useState(initialState);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))

  }, [patients])

  const deletePatient = (id) => {
    const patientsFiltered = patients.filter(patient => patient.id !== id)
    
    setPatients(patientsFiltered)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
