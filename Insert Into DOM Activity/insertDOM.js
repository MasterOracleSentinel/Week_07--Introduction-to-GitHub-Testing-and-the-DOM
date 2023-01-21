function addItem() {
  // TODO: add 'item' to the list of TODOs
  
  //Step 1: identify the value of the myInput element. 
  let inputValue = document.getElementById('myInput').value;
  
  //Step 2: Create a text node containing that value
  const t = document.createTextNode(inputValue);
  
  //Step 3: Create a new li element and append the text node to it
  const li = document.createElement('li');
  
  
  //Step 4: Append the li element to the existing myTODOs element.
  li.appendChild(t);
  document.getElementById('myTODOs').appendChild(li);

}



//don't change this line
if (typeof module !== 'undefined') {
  module.exports = addItem;
}
