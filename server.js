
//1. importo libreria http necessaria per creare un server, esiste già nativamente in Node, la importiamo e basta
const http = require("http");

//importo libreria dotenv
const dotenv = require("dotenv");

 //la avvio
dotenv.config();

//usiamo la 3000 di default, prevediamo la possibilità di passare la porta come variabile d'ambiente
const port = process.env.PORT || 3000; 

//funzioni

const sentences = [
    "L'unico modo per raggiungere la cima e' imbrogliare la gravita'.",
    "Se non riesci a trovare la luce alla fine del tunnel, potresti aver dimenticato di accendere l'interruttore.",
    "La vita e' come una bicicletta: se smetti di pedalare, cadi. Ma puoi sempre scendere e prendere un taxi!",
    "Non ti preoccupare, anche le montagne si sono formate da un granello di sabbia un po' pigro.",
    "Il fallimento e' l'opportunita' di iniziare di nuovo con piu' intelligenza. O almeno con una scusa migliore.",
    "Non preoccuparti di cosa pensano gli altri di te. A meno che tu non sia in cerca di feedback su quale sia il tuo aspetto in quella tutina da astronauta.",
    "Sii te stesso, a meno che tu possa essere un unicorno. In tal caso, sii sempre un unicorno.",
    "La vita e' un puzzle, ma spesso sembra che manchi qualche pezzo e la scatola sia in lingua straniera.",
    "Ricorda, i sogni non si avverano mai se non smetti di dormire tutto il giorno.",
    "La vita e' troppo breve per indossare calze noiose. Anche se nessuno le vedre' mai, saranno il tuo segreto di stile!"
  ];

    function randomSentences(){

     const i = Math.floor(Math.random() * sentences.length);
     const randomSentence = sentences[i];
     return randomSentence
   }



function htmlResponse(res,content){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content)
}

//2. Creo Server

/**
 *
 */
const server = http.createServer(function(req, res){
// if(req.url=== "/favicon.ico") req.writeHead((404).end())
htmlResponse(res, `<h1>Funziona
PIN: ${process.env.PIN} , CVV:${process.env.CVV}
, ${randomSentences()} </h1>`)

})

server.listen(port, function(){

    console.log("Server is running http://localhost:" + port);
})