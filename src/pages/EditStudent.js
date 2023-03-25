import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormStudent from "../components/FormStudent";
import api from '../api/c97-strapi';

function EditStudent() {
  const [student, setStudent] = useState(null);
  const { studentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.getOneStudent(studentId)
      .then((result) => {
        setStudent(result)
      })
      .catch((error) => console.log(error));
  }, [studentId]);

  const handleSubmit = (newStudent) => {
    api.editStudent(studentId, newStudent)
      .then((result) => {
        window.alert(`${result.attributes.name} edited!`);
        navigate(`/students/${studentId}`);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2>Edit Student</h2>
      {student
        ? <FormStudent onSubmit={handleSubmit} initialValues={student} />
        : <p>Carregando informações...</p>
      }
      
    </div>
  )
}

export default EditStudent