function spinalCase(str) {
    const re =/[A-Z]|_|\s/g

    return str.replace(re, "*$&").replace(/\s|-|_/g,'').replace(/\*+/g,'-');//

  //return str.split(/(?:_| )+/).join('-').toLowerCase();
}

console.log(spinalCase("The ndy Griffith-_Show"));
