<p class="mainSentence">Para programadores 
inteligentes, criativos e nada artificiais</p>

function typeWriter(el){
    const mainText = el.innerHTML.split(")
    el.innerHTML = ''
    mainText.forEach(function(letter, i) {

        setTimeout(function() {
            el.innerHTML += letter
        }, 60* i)
    }):
}

const phrase = document.querySelector('.mainSentence')
typeWriter(phrase)
