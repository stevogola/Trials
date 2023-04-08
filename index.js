function Validate() {
    var foam = document.querySelector('.foam');
    foam.style.animationPlayState = 'paused';
  
    var button = document.getElementById('button');
    button.addEventListener('click', function() {
      var dob = new Date(document.getElementById('Date of Birth').value);
      var month = dob.getMonth() + 1; 
  
      var output = document.getElementById('output');
      var message;
  
      switch (month) {
        case 1:
          message = 'One';
          break;
        case 2:
          message = 'Two';
          break;
        case 3:
          message = 'Three';
          break;
        case 4:
          message = 'Four';
          break;
        case 5:
          message = 'Five';
          break;
        case 6:
          message = 'Six';
          break;
        case 7:
          message = 'Seven';
          break;
        case 8:
          message = 'Eight';
          break;
        case 9:
          message = 'Nine';
          break;
        case 10:
          message = 'Ten';
          break;
        case 11:
          message = 'Eleven';
          break;
        case 12:
          message = 'Twelve';
          break;
        default:
          message = 'we are done';
      } }}
  
  
  