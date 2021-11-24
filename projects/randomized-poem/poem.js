/* 

1. Create two to four lists of words or phrases. Each list should have some sort of theme, or be similar in some way. As a guiding principle, each list should have 5+ items to start. Your lists should be separate in some way (in theme, purpose, or structure).

2. Write the formula for selecting a random element from an array. Use string interpolation to swap out one of the words in the poem for a randomly selected element from your list.

Hint: Formula for selecting a random element from an array
let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];

3. Write a function that logs the randomized poem to the console.

4. Invoke (call) the function to run the poem.

5. Check the console for the result.

Sample Poem: // A house of steel / Among high mountains / Using candles / Inhabited by people who sleep almost all the time.

*/

let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
  let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];

  let array_three = [
    "ran out of",
    "crushed to",
    "cried for",
    "walked past by",
    "screamed at the top of"
  ];

  let array_four = [
    "his",
    "her",
    "their",
    "our",
    "my"
  ];

  let array_five = [
    "lungs",
    "home",
    "hill",
    "pit",
    "ground"
  ];
  
  // let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  
  function renderPoem() {
    let element_from_array_one =
      array_one[Math.floor(Math.random() * array_one.length)];
  
    let element_from_array_two =
      array_two[Math.floor(Math.random() * array_two.length)];

      let element_from_array_three =
    array_three[Math.floor(Math.random() * array_three.length)];

    let element_from_array_four =
    array_four[Math.floor(Math.random() * array_four.length)];

    let element_from_array_five =
    array_five[Math.floor(Math.random() * array_five.length)];
  
    // grab div from html
    let poem = document.querySelector(".poem");
  
    // create a new element (paragraph)
    let paragraph = document.createElement("p");
    paragraph.textContent = element_from_array_one + " " + element_from_array_two + " " + element_from_array_three + " " + element_from_array_four + " " + element_from_array_five;
  
    // append the p to the div
    poem.appendChild(paragraph);
  
    // console.log(element_from_array_one + " " + element_from_array_one)
    console.log(`${element_from_array_one} \n ${element_from_array_two} \n ${element_from_array_three} \n ${element_from_array_four} \n ${element_from_array_five}`);
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);
  
  