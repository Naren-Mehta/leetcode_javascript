function bluify(e) {
    console.log(this === e.currentTarget);
    // true when currentTarget and target are the same object
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
  }
  
  // Get a list of every element in the document
  var elements = document.getElementById('testButtonId');
  
  // Add bluify as a click listener so when the
  // element is clicked on, it turns blue
  elements.addEventListener('click', bluify, false);


  