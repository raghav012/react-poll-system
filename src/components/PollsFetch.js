let polls;
if(localStorage.getItem('polls') === null){
  polls = [];
} else {
  polls = JSON.parse(localStorage.getItem('polls'));
}

export default polls;