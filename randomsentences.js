const sentences = [
    "L'unico modo per raggiungere la cima è imbrogliare la gravità.",
    "Se non riesci a trovare la luce alla fine del tunnel, potresti aver dimenticato di accendere l'interruttore.",
    "La vita è come una bicicletta: se smetti di pedalare, cadi. Ma puoi sempre scendere e prendere un taxi!",
    "Non ti preoccupare, anche le montagne si sono formate da una granello di sabbia un po' pigro.",
    "Il fallimento è l'opportunità di iniziare di nuovo con più intelligenza. O almeno con una scusa migliore.",
    "Non preoccuparti di cosa pensano gli altri di te. A meno che tu non sia in cerca di feedback su quale sia il tuo aspetto in quella tutina da astronauta.",
    "Sii te stesso, a meno che tu possa essere un unicorno. In tal caso, sii sempre un unicorno.",
    "La vita è un puzzle, ma spesso sembra che manchi qualche pezzo e la scatola sia in lingua straniera.",
    "Ricorda, i sogni non si avverano mai se non smetti di dormire tutto il giorno.",
    "La vita è troppo breve per indossare calze noiose. Anche se nessuno le vedrà mai, saranno il tuo segreto di stile!"
  ];

   function randomSentences(){

    const i = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[i];
    console.log(randomSentence);

  }