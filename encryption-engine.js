function encrypt(text, shift){
    if(typeof text !== "string" || typeof shift !== 'number' || isNaN(shift)){
        return "Please enter valid Text and Number"
    }

    let encryptText = '';
    for(let i = 0; i< text.length; i++){
        let ascii = text.charCodeAt(i);
        if(ascii >= 65 && ascii <= 90){
            ascii = ((ascii -65 + shift) % 26)+65;
        }else if( ascii >= 97 && ascii <= 122){
            ascii = ((ascii -97 + shift)% 26) + 97;
        }
        const convertText = String.fromCharCode(ascii+shift);
       encryptText += convertText;    
    }
    return encryptText;
}

const t = encrypt('rayhan', 2);

console.log(t);
