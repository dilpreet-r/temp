// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Get the forms we want to add validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
//   })();


function addRow()
{
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var website=document.getElementById("website").value;
  var image=document.getElementById("image").value;
  var gender=document.querySelector('input[name="gender"]:checked').value;
  var table=document.getElementById("students");
  var languages = [];
  var inputElements = document.getElementsByClassName('lang');
  for(var i=0; inputElements[i]; ++i)
  {
    if(inputElements[i].checked)
    {
        languages.push(inputElements[i].value);
    }
  }
  var row = table.insertRow();
  var description = row.insertCell(0);
  var descriptionImage = row.insertCell(1);
  description.innerHTML = "<strong>" + name + "</strong> <br/>" + gender+ "<br/>" + email +"<br/> <a href=\"https://" + website +"\"  target=\"_blank\">"+ website +"</a> <br/>" + languages;
  descriptionImage.innerHTML ="<img  width=100%  src=\"" + image + "\">";
  row.className="fade";
  document.getElementById("newStudent").reset();

}
