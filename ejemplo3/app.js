const vowels=[
'a' ,'e','i','o','u'
]

// vowel es el item , si es requerido, index y arr son opcional
//vowels.map( vowel=> {console.log("hola",index)})


// usando index
//vowels.map((vowel,index)=>console.log(vowel,index))

//const newVowels=vowels.map((vowel) =>{
//return  vowel
//})

//console.log(vowels);

const newVowels=vowels.map((vowel) =>{
    return  vowel.toUpperCase })