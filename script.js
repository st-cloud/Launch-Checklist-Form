// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


window.addEventListener("load", function () {
   //console.log("window loaded");
   
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
         event.preventDefault();
      }
      else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Please enter a number.");
         event.preventDefault();
      }
      //won't any input come back as a string?:
      else if (typeof pilotNameInput.value != "string" || typeof copilotNameInput.value != "string") {
         alert("Please enter a name.");
         event.preventDefault();
      }

      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.append(`: ${pilotNameInput.value}`);

      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.append(`: ${copilotNameInput.value}`);

      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Insufficient fuel for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

         event.preventDefault();
      }

      if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Too much mass for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

         event.preventDefault();
      }

      if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";

         event.preventDefault();
      }
   });
});



