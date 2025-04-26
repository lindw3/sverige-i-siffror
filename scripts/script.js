   



   
   
   /TESTET/


   
namn.focus()


document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("test-input");
 
   form.addEventListener("submit", (event) => {
     event.preventDefault(); // Prevent the form from submitting normally
 
     // Get form data
     const namn = document.getElementById("namn").value;
     const ålder = document.getElementById("ålder").value;
     const kön = document.querySelector('input[name="kön"]:checked').value;
     const längd = document.getElementById("längd").value;
     const vikt = document.getElementById("vikt").value;
     const sömn = document.getElementById("sömn").value;
     const träning = document.getElementById("träning").value;
 
 
     // Save data to localStorage
     localStorage.setItem("namn", namn);
     localStorage.setItem("ålder", ålder);
     localStorage.setItem("kön", kön);
     localStorage.setItem("längd", längd);
     localStorage.setItem("vikt", vikt);
     localStorage.setItem("träning", träning);
     localStorage.setItem("sömn", sömn);
 
     // Redirect to the report page
     window.location.href = "rapport.html";
   });
 });
