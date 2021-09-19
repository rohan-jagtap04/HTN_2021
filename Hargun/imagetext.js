const tesseract = require("tesseract.js");
const fs = require("fs")

tesseract
    .recognize("input.jpg", "eng", {logger: (m) => console.log(m),
     })
    .then(({data:{ text } }) => {
        fs.writeFile("output.txt", text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("Sucess!");
        });
    })
    .catch((err) => {
        console.log(err.message);
    });

// const getImageText = async (fileName, lang, logger) => {
//     let recognizeResult = null
//     try {
//         if (fs.existsSync(fileName)) {
//             if(logger){
//                 const myLogger = {
//                     logger: m => console.log(m)
//                 }
//                 recognizeResult = await tesseract.recognize(fileName, lang, myLogger)
//             }  else {
//                 recognizeResult = await tesseract.recognize(fileName, lang);

//             }
//             if (recognizeResult) {
//                 return recognizeResult.data.text
//             }
//         }
//     } catch (error)   { 
//         return error.message
//     }   

// }

// getImageText("imagetext.jpg", "eng", true).then(content =>{
//     console.log(content)
// }).catch(errMsg => {
//     console.log(errMsg)
// })
    