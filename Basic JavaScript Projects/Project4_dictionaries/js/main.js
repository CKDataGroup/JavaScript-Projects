function my_Dictionary() {  //Dictionary Challenge
  var Animal = {
      Species: "Dog",
      Color: "Black",
      Breed: "Labrador",
      Age: 5,
      Sound: "Bark!"
  }
  delete Animal.Sound; //Deleting the sound property from the dictionary
  document.getElementById("Dictionary").innerHTML = Animal.Sound;
  document.getElementById("Dictionary2").innerHTML = Animal.Breed;
}  
  
  
  
  
  
  