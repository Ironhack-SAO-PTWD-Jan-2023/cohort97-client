import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/c97-strapi';
// import axios from 'axios';

// const baseURL = 'http://localhost:1337/api';

function Students() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.getAllStudents()
      .then((result) => {
        setStudents(result);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [])

  return (
    <div>
      <h1>Students</h1>
      {loading && <p>Aguarde...</p>}
      {!!students.length && students.map(student => {
        return (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h2>{student.attributes.name}, {student.attributes.age}</h2>
            </Link>
            <p>{student.attributes.about}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Students