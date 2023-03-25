import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import api from '../api/c97-strapi';

function StudentDetails() {
  const [student, setStudent] = useState(null);
  const { studentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.getOneStudent(studentId)
      .then((result) => {
        setStudent(result);
      })
  }, [studentId])

  const deleteStudent = () => {
    if (window.confirm(`Delete ${student.attributes.name}?`) === true) {
      api.removeStudent(studentId)
      .then(() => {
        navigate('/students');
      })
      .catch((error) => console.log(error))
    }
  }

  if (!student) {
    return <div>Carregando informações do aluno...</div>
  }

  return (
    <div>
      <img src={student.attributes.imageURL} alt='student profile' />
      <h2>{student.attributes.name}, {student.attributes.age}</h2>
      <p>{student.attributes.about}</p>
      <Link to={`/students/${studentId}/edit`}><button>Edit</button></Link>
      <button onClick={deleteStudent}>Delete</button>
    </div>
  )
}

export default StudentDetails;