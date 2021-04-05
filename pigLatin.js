function translatePigLatin(str) {
  let translatedPigLatin = [];
  let newStr = str.split("");
  let consonants = ['b','c','d','f','g','j','k','l','m','n','p','q','s','t','v','x','z','h','r','w','y'];
  newStr.forEach(newStrLetter =>{
      if(consonants.forEach((consonantsLetter) => {
          if(newStrLetter[0] === consonantsLetter)}
          )){
        let pigLatinWordIfConsonant = newStr.slice(0).splice(-1,0,'consonantsLetter','ay').join();
         translatedPigLatin.push(pigLatinWordIfConsonant);
      }else{
        let pigLatinWordIfVowel = newStr.slice(0).splice(-1,0,'way').join();
         translatedPigLatin.push(pigLatinWordIfVowel);
      }
  })

  return translatedPigLatin.join();
}

console.log(translatePigLatin("consonant")
)