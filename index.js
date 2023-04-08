function Validate() {
    var foam = document.querySelector('.foam');
  
  
    var button = document.getElementById('button');
    button.addEventListener('click', function() {
      var dob = new Date(document.getElementById('Date of Birth').value);
      var month = dob.getMonth() + 1; 
  
      var output = document.getElementById('output');
      var message;
  
      switch (month) {
        case 1:
          message = 'RAM';
          break;
        case 2:
          message = 'ROM';
          break;
        case 3:
          message = 'Harddisk';
          break;
        case 4:
          message = 'Mouse';
          break;
        case 5:
          message = 'Keyboard';
          break;
        case 6:
          message = 'Motherboard';
          break;
        case 7:
          message = 'Harddrive';
          break;
        case 8:
          message = 'Monitor';
          break;
        case 9:
          message = 'CPU';
          break;
        case 10:
          message = 'NIC';
          break;
        case 11:
          message = 'PSU';
          break;
        case 12:
          message = 'Video card';
          break;
        default:
          message = 'we are done';
      } }}
  
  
  