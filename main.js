//Creates an array that can be accessed and sorted through using dot(pet.name) and bracket(pet[name]) notation.
const pets = [
    {
      id: 1,
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
    },
    {
        id: 2,
      imageUrl: "https://img.freepik.com/free-photo/dinosaur-roars-fiercely-prehistoric-landscape-generative-ai_188544-8721.jpg?size=626&ext=jpg&ga=GA1.1.934505522.1721766816&semt=sph",
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      },
    {
      id: 3,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
    },
    {
      id: 4,
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
    },
    {
      id: 5,
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat", 
    },
    {
      id: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
    },
    {
      id: 7,
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
    },
    {
      id: 8,
      imageUrl: "https://img.freepik.com/free-photo/extinct-triceratops-dinosaur-with-natural-habitat_23-2151646981.jpg?size=626&ext=jpg&ga=GA1.2.934505522.1721766816&semt=sph",
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",      
    },
    {
      id: 9,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",    
    },
    {
      id: 10,
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",      
    },
    {
      id: 11,
      imageUrl: "https://img.freepik.com/premium-psd/allosaurus-dinosaur-white-background_44074-6415.jpg?size=626&ext=jpg&ga=GA1.1.934505522.1721766816&semt=sph",
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",    
    },
    {
      id: 12,
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      
    },
    {
      id: 13,
       imageUrl: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg",
       name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",    
    },
    {
      id: 14,
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg", name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",     
    },
    {
      id: 15,
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",     
    },
    {
      id: 16,
      imageUrl: "https://img.freepik.com/premium-photo/dinosaur-stegosaurus-background-mountains_977935-6802.jpg?size=626&ext=jpg&ga=GA1.2.934505522.1721766816&semt=sph",
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",      
    },
    {
     id: 17,
      imageUrl: "https://img.freepik.com/free-photo/playful-cat-peeking-from-white-surface_60438-3920.jpg?ga=GA1.1.934505522.1721766816&semt=sph",
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",     
    },
    {
      id: 18,
      imageUrl: "https://img.freepik.com/free-photo/tyrannosaurus-rex-wild_23-2151446447.jpg?size=626&ext=jpg&ga=GA1.2.934505522.1721766816&semt=sph",
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      
    },
    {
      id: 19,
      imageUrl: "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_640.jpg",
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      
    },
    {
      id: 20,
      imageUrl: "https://img.freepik.com/free-photo/cute-cat-digital-art_23-2151232310.jpg?ga=GA1.1.934505522.1721766816&semt=ais_user",
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
    },
    {
      id: 21,
      imageUrl: "https://img.freepik.com/free-photo/pterodactylus-natural-environment_23-2151640146.jpg?size=626&ext=jpg&ga=GA1.2.934505522.1721766816&semt=sph",
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
    },
    {
        id: 22,
      imageUrl: "https://img.freepik.com/free-photo/selective-closeup-cute-kitten-floor_181624-58552.jpg?ga=GA1.1.934505522.1721766816&semt=ais_user",
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",     
    },
    {
        id: 23,
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",    
    },
    {
        id: 24,
      imageUrl: "https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_640.jpg",
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",      
    },
    {
      id: 25,
      imageUrl: "https://img.freepik.com/premium-photo/cute-red-kitten-hiding-from-rain-leaves-ai-generated_859483-103.jpg?ga=GA1.1.934505522.1721766816&semt=ais_user",
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",     
    },
    {
        id: 26,
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",     
    },
    {
        id: 27,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",     
    },
    {
        id: 28,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",      
    },
    {
        id: 29,
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",     
    },
    {
        id: 30,
       imageUrl: "https://img.freepik.com/free-photo/view-extinct-triceratops-dinosaur-creature_23-2151646911.jpg?size=626&ext=jpg&ga=GA1.2.934505522.1721766816&semt=sph",
       name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",     
    }
  ]
//This utility function allows the user to add or update information to any id within the html or js and put it on the internet page
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  

  const cardsOnDom = (pets) => {
    let domString = "";
    //The for loop allows us to go through each pet in the array and pull out data within them choosing which data will be displayed on the internet page using the arrow function above
    for (const pet of pets) {
      domString += `<div class="card" style="width: 18rem;">
        <image src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
        <div class="card-body">
        <h3 class="pet-name">${pet.name}</h3>
        <h5 class="pet-color">${pet.color}</h5>
          <p class="pet-skill">${pet.specialSkill}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
        <div>
          <h3 class=${pet.type}></h3>
      </div>`; 
    }

    //Places all the information from the app and puts it on the internet page
    renderToDom("#app", domString);
  };

  //This function filters through each pet and pulls out any pets that match the pet type selected
  const filter = (pets, petType) => {
  const petArray = [];

  //if type of pet matches pet type the pet card is pusehed into the new array
  for (const pet of pets) {
    if(pet.type === petType) {
      petArray.push(pet);
    }
  }
  //allows the function to return something and puts it back on the internet page
  return petArray;
  };

  //Allows user to access an element within the form
  const form = document.querySelector('form');


  //Function that takes the values to the form and pushes the new pet to the array
  const createPet = (e) => {
    e.preventDefault(); //Used every time you create a form
  
    const newPet = {
      id: pets.length + 1,
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      imageUrl: document.querySelector("#imageUrl").value,
      type: document.querySelector("#type").value
    }
  //Adds new pet from the input form and adss new pet card to the DOM and clears out the form
    pets.push(newPet);
    cardsOnDom(pets);
    form.reset();
  }
  
  //When the submit button is pressed it instigates the create pet function
  form.addEventListener('submit', createPet);
 
 
  //Targets the app div
  const app = document.querySelector("#app");

  //When the delete button is clicked it instigates the delete function
app.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
   //basically this says tell it to look for the id of the pet in which the delete button is pressed (e) is a placeholder
    const [, id] = e.target.id.split("--");
    //of that pet with the id it removes (splits) that id and the information from the pets array
    const index = pets.findIndex(e => e.id === Number(id));
    //This removes it from the array
    pets.splice(index, 1);
    //Reposts the updated array
    cardsOnDom(pets);
  }
});

  //Targets the sorting buttons
  const showAllBtn = document.querySelector("#all-pets");
  const showCatBtn = document.querySelector("#cats");
  const showDogBtn = document.querySelector("#dogs");
  const showDinoBtn = document.querySelector("#dinos");

showAllBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});

//Event listener that "listens" for the click on the sorting buttons 
showCatBtn.addEventListener("click", () => {
  const petCats = filter(pets, "cat");
  cardsOnDom(petCats);
});

showDogBtn.addEventListener("click", () => {
  const petDogs = filter(pets, "dog");
  cardsOnDom(petDogs);
});

showDinoBtn.addEventListener("click", () => {
  const petDinos = filter(pets, "dino");
  cardsOnDom(petDinos);
});

const startApp = () => {
  cardsOnDom(pets);
}


startApp();
