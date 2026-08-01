function encrypt(text, shift){
    if(typeof text !== "string" || typeof shift !== 'number' || isNaN(shift) || shift < 0){
        return "Please enter valid Text and Number"
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let indexValue = "";

    for(let i = 0; i<text.length; i++){
        let index = alphabet.indexOf(text[i]);
        if(index === -1){
            return 'Plsase enter Valid chercter'
        }
       let change = (index+ shift) % 52;
       indexValue += alphabet[change];
       
    }
    return indexValue;

}

const encryptText = encrypt("tkxz", 1);
console.log(encryptText);
