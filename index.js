var buttonSup = document.getElementsByClassName("btn_sup");
var buttonmoins = document.getElementsByClassName("btn_moins");
var buttonplus = document.getElementsByClassName("btn_plus");

console.log(buttonSup);
console.log(buttonmoins);
console.log(buttonplus);

// ajouter l'evenement supprimer
for (let index = 0; index < buttonSup.length; index++) {
  buttonSup[index].addEventListener("click", () => {
    let grandParent = buttonSup[index].parentElement.parentElement;
    console.log(grandParent);
    grandParent.remove();
  });
}

// ajouter l'évenement moins
for (let index = 0; index < buttonmoins.length; index++) {
  buttonmoins[index].addEventListener("click", () => {
    let parent = buttonmoins[index].parentElement;
    let input = parent.childNodes[8];
    let inputValue = parseInt(input.value);
    if (inputValue > 0) {
      let newInputValue = inputValue - 1;
      input.value = newInputValue;
      console.log(newInputValue);
    }
    sousTotal()
  });
}

// ajouter l'évenement plus
for (let index = 0; index < buttonplus.length; index++) {
  buttonplus[index].addEventListener("click", () => {
    let parent = buttonplus[index].parentElement;
    let input = parent.childNodes[8];
    let inputValue = parseInt(input.value);

    let newInputValue = inputValue + 1;
    input.value = newInputValue;
    sousTotal()
    console.log(newInputValue);
  });
}

// ajouter l' évenement prix
function sousTotal () {
  var prix = document.getElementsByClassName("price");
  var quantite = document.getElementsByClassName("quantite");
  var sousTotalInputs = document.getElementsByClassName("soustotal")

  for (let index = 0; index < prix.length; index++) {
      const prixInt = parseInt(prix[index].innerHTML)
      const quantiteInt = parseInt(quantite[index].value)
      const total = prixInt * quantiteInt
      sousTotalInputs[index].value = total
      
      console.log(total);
    
    
  }

  console.log(prix);
  console.log(quantite);
  console.log(sousTotalInputs);
}
 sousTotal()