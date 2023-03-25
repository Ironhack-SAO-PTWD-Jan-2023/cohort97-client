import { useState } from 'react';

const defaultFormValues = {
  attributes: {
    name: '',
    about: '',
    imageURL: '',
    age: 0
  }
}

function FormStudent({onSubmit, initialValues = defaultFormValues}) {
  const [name, setName] = useState(initialValues.attributes.name);
  const [about, setAbout] = useState(initialValues.attributes.about);
  const [imageURL, setImageURL] = useState(initialValues.attributes.imageURL);
  const [age, setAge] = useState(initialValues.attributes.age);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({name, about, imageURL, age});
    setName(initialValues.attributes.name);
    setAbout(initialValues.attributes.about);
    setImageURL(initialValues.attributes.imageURL);
    setAge(initialValues.attributes.age);
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name: </label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="about-input">About: </label>
          <input
            id="about-input"
            type="text"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageURL-input">Image URL: </label>
          <input
            id="imageURL-input"
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age-input">Age: </label>
          <input
            id="age-input"
            type="number"
            name="age"
            min="0"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
  )
}

export default FormStudent