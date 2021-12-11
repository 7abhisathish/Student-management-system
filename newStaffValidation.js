var Gender = '';
function newStudentValidation(){
   var Id = document.getElementById('stuId').value;
   var Name = document.getElementById('stuName').value;
   var Password = document.getElementById('stuPassword').value;
   var Phone = document.getElementById('stuPhone').value;
   var Email = document.getElementById('stuEmail').value;
   var DOB = document.getElementById('stuDOB').value;
   var HireDate = document.getElementById('stuAddmissionDate').value;
   var Address = document.getElementById('stuParentId').value;
   var Salary = document.getElementById('stuClassId').value;
   if(!Id){
       alert('Staff Id Must be filled out.')
       return false;
   }
   else if(!Name){
       alert('Staff Name must be filled out.')
       return false;
   }
   else if(!Password){
       alert('Staff Password must be filled out.')
       return false;
   }
   else if(!Phone){
       alert('Staff Phone must be filled out.')
       return false;
   }
   else if(!Email){
       alert('Staff Email must be filled out.')
       return false;
   }
   else if(!Gender){
       alert('Staff Gender must be filled out.')
       return false;
   }
   else if(!DOB){
       alert('Staff Date Of Birth must be filled out.')
       return false;
   }
   else if(!HireDate){
       alert('Staff Parent Id must be filled out.')
       return false;
   }
   else if(!Address){
       alert('Staff Class Id must be filled out.')
       return false;
   }
   else if(!Salary){
       alert('Staff Class Id must be filled out.')
       return false;
   }
   else return true;
}