console.log("Hello, world!");

let addExcitement = (words, punct) => {
    let build = "";
    let third = 1;
    for(let i = 0; i < words.length; i += 1){
        
        if(third % 3 == 0 && third != 0){
            let exclame = punct;
            if(third/3 > 1){
                for(let k = third/3; k > 1; k -= 1){
                    exclame += punct;
                }
            }
            build += words[i] + exclame + " ";
            third  += 1;
            
        }else{
            build += words[i] + " ";
            third += 1;
        }
        console.log(build);
    }
   
};
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let sentenceTwo = ["The","quick","brown","fox","jumps","over","the","lazy","dog"];
addExcitement(sentence, "?");
addExcitement(sentenceTwo, "$");