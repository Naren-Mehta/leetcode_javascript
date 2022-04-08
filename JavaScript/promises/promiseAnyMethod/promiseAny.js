function fetchAndDecode(url) {
    return fetch(url).then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.blob();
      }
    })
  }
  
  let coffee = fetchAndDecode('https://random.dog/9a21069b-5272-44ac-ab2b-4fcd040f8143.jpg');
  let tea = fetchAndDecode('https://random.dog/8aff4e84-260d-4af0-9dc1-438d07ba3884.jpg');
  
  Promise.any([coffee, tea]).then(value => {
    let objectURL = URL.createObjectURL(value);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => {
    console.log(e.message);
  });
  