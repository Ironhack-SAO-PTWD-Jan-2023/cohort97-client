import { useNavigate } from 'react-router-dom';
import api from '../api/c97-strapi';

import FormStudent from '../components/FormStudent';

function NewStudent() {
  const navigate = useNavigate();

  const handleSubmit = ({name, about, age, imageURL}) => {
    api.createStudent({name, about, age, imageURL})
      .then((result) => {
        window.alert(`${result.attributes.name} created!`);
        navigate('/students');
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <h2>Add Student</h2>
      <FormStudent onSubmit={handleSubmit} />
    </div>
  )
}

export default NewStudent