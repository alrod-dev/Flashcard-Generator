// Author: Alfredo Rodriguez
// File: JS - ClozeCard.js
// Date: 8/30/2017

//ClozeCard object that
function ClozeCard(text, cloze) {

    this.cloze = cloze;

    //Checks whether there is the cloze text
    //Inside the full text
    if(text.includes(cloze))
    {
        this.fullText = text;

        //Determines the length of the cloze word
        var lengthOfWord = cloze.length;

        //Only outputs anything after the cloze text
        this.partial = "......." + text.substr(lengthOfWord, text.length - 1);
    }

    else
    {
        console.log("'" + cloze + "'" + " doesn't appear to be in " + "'" + text + "'");
    }

}


//Exports the ClozeCard object
module.exports = ClozeCard;