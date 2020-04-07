import { checkUrl } from './checkURL';
import { updateUI } from './updateUI';

const handleSubmit = (event) => {
  event.preventDefault();
  // check what text was put into the form field
  const formUrl = document.getElementById('name').value;

  if (!checkUrl(formUrl) || formUrl == '') {
    alert(` Please enter a valid URL. ex. www.google.com`);
    return;
  } else {
    const newURL = `http://localhost:8081/api?url=${formUrl}`;

    console.log('::: Form Submitted :::');

    fetch(newURL)
      .then((res) => res.json())
      .then((data) => updateUI(data));
  }
};

export default handleSubmit;
