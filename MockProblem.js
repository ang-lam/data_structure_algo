

//'aaaabbbcccc' => [c]
//'aabbc' => [a,b]
function mostCommonChar(string){
    letters = {}
    for (let i = 0; i < string.length; i++){
        if(string[i] in letters){
            letters[string[i]]++
        }
        else{
            letters[string[i]] = 1
        }
    }
    let maxChar = []
    let maxCount = 0
    for (let letter in letters){
        if(letters[letter] > maxCount){
            maxCount = letters[letter]
            maxChar = [letter]
        }
        else if (letters[letter] === maxCount){
            maxChar.push(letter)
        }
    }
    return console.log(maxChar)
}

mostCommonChar('aabbbc')