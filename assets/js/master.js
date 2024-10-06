const texts = document.querySelector('.texts') //getting text updates

//getting regular and webkit speech recognition verion  :
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


//creating new instance of speech recognition

const recognition = new window.SpeechRecognition();


//Getting real-time resaults

recognition.interimResults = true;
//if we give false it will wait until we are done talking and if true it will type while we're talking

// Enable continuous listening
recognition.continuous = true;  // Keep listening even after pauses

let p = document.createElement('p');


//eventListener for recognition
recognition.addEventListener('result', (e) => {
    //to make the results into an array
    const text = Array.from(e.results)
        //to map the whole result:
        //result[0] is choosing the fastest result which is alternative-speech-recognition
        .map(result => result[0])
        .map(result => result.transcript)
        .join('') //joining 2 type of results together

    p.innerText = text;
    texts.appendChild(p);


    console.log(text);

})

//to manually restart the app again
recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();
