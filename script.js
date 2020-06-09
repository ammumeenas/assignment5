


window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         missionTarget = document.getElementById("missionTarget");
         let i = Math.floor(Math.random() * 6);
         console.log(i);
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[i].name}</li>
               <li>Diameter: ${json[i].diamteter}</li>
               <li>Star: ${json[i].star}</li>
               <li>Distance from Earth: ${json[i].distance}</li>
               <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}"></img>
            `;


      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      function validityCheck() {
         if (isNaN(pilotName.value) && isNaN(copilotName.value) && !isNaN(fuelLevel.value) && !isNaN(cargoMass.value)) {

            return true;
         }
         else {
            return false;
         }
      }
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");

      }

      let validationCheck = validityCheck();
      console.log(validationCheck);
      if (validationCheck === false) {
         alert("Enter valid inputs");

      }

      let fuelStatus = document.getElementById("fuelStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
         launchStatus.innerHTML = "Shuttle ready for launch";
         launchStatus.style.color = "green";

      }

      else {
         document.getElementById("faultyItems").style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} ready`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} ready`;
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      }

      if (fuelLevel.value < 10000) {
         fuelStatus.innerHTML = "There is not enough fuel for the journey";

      }

      else {
         fuelStatus.innerHTML = "There is enough fuel for the journey"

      }

      if (cargoMass.value > 10000) {
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";

      }
      else {

         cargoStatus.innerHTML = "Cargo mass low enogh to launch"

      }

   });



});
















