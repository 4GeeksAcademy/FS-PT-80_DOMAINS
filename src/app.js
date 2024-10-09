/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pron = ["She", "They", "He", "You", "We"];
const adj = ["epic", "legendary", "mystic", "powerful", "rare"];
const names = ["decks", "cards", "battles", "draws", "trades"];
const domain = [".com", ".net", ".org", ".net", ".io"];

pron.forEach(pron =>
  adj.forEach(adj =>
    names.forEach(names =>
      domain.forEach(domain => console.log(`${pron}${adj}${names}${domain}`))
    )
  )
);
