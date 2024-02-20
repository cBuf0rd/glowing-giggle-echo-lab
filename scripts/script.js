$(document).ready(function(){
    // function that will make the name uppercase
    $("#buttonUpper").click(function(){
      
      // var that holds the name
      var userName = $("#fname").val();
  
       // changes to upper case
      var nameUpper = userName.toUpperCase();
        
        // array that holds spirit animal names
        var sAnimal = ["RASPBERRY CRAZY ANTS", "PINK FAIRY ARMADILLO", "LEAFY SEADRAGON", "ICE CREAM CONE WORM", "FRIED EGG JELLYFISH", "SATANIC LEAF-TAILED GECKO"];
       
      // gets random from the array
      var randAnimal = sAnimal[Math.floor(Math.random() * sAnimal.length)];
        
        // sends the output
      $("#finalOutput").text(nameUpper + " YOUR SPIRIT ANIMAL IS " + randAnimal + "!");
      
    });
        
     // function that will make the name lowercase
    $("#buttonLower").click(function(){
      
      // var that holds the name
      var userName = $("#fname").val();
  
       // changes to upper case
      var nameLower = userName.toLowerCase();
        
        // array that holds spirit animal names
        var sAnimal = ["raspberry crazy ants", "pink fairy armadillo", "leafy seadragon", "ice cream cone worm", "fried egg jellyfish", "satanic leaf-tailed gecko"];
       
      // gets random from the array
      var randAnimal = sAnimal[Math.floor(Math.random() * sAnimal.length)];
        
        // sends the output
      $("#finalOutput").text(nameLower + " your spirit animal is " + randAnimal + "!");
    });
     
  });