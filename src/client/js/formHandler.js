import validator from 'validator';
import { updateUI } from './updateUI';

const handleSubmit = (event) => {
  event.preventDefault();

  // check what text was put into the form field
  const formUrl = document.getElementById('name').value;
  const url = `http://localhost:8081/api?url=${formUrl}`;

  console.log('::: Form Submitted :::');
  if (!validator.isURL(formUrl)) {
    alert(`${formUrl} is not a valid URL. Please enter a valid URL.`);
  } else {
    fetch(url)
      .then((res) => res.json())
      .then((data) => updateUI(data, formUrl));
  }
};

export { handleSubmit };
