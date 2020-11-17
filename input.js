const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(e) {
    //check for data that was inputed and if there is a next input focus it
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus(); 
            } 
}

 function handlePaste(e) {
     const paste = e.clipboardData.getData('text');
     // loop over each input 
  inputs.forEach((input, i) => {
         console.log(input);
         input.value  = paste[ i ] || ' ' ;
     }); 
 }

inputs[0].addEventListener('paste', handlePaste); 
form.addEventListener('input',  handleInput);

//  copy this numbers 123456 and paste in one of the box it will automatically help you fill all the boxes