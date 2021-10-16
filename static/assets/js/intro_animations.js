function jumpScare(element, image) {
    let imgElem = `
    <img id="scare-img" src="${image}" alt="scare" style="height: 100vh; width: 100vw; position: absolute; top: 0; left: 0;
    box-shadow: inset 0 0 10px var(--p-orange),
    inset 0 0 20px var(--p-orange),
    inset 0 0 40px var(--p-orange),
    inset 0 0 80px var(--p-orange),
    inset 0 0 120px var(--p-orange);" />
    `
    setTimeout(() => {
        element.innerHTML = imgElem;

    }, 20)

    setTimeout(() => {
        let elemRemove = document.getElementById('scare-img');
        elemRemove.remove()
    }, 180)
}

function showBeginButton() {
    let buttonContainer = document.getElementById('begin-story');

    let buttonHTML = `
    <button id="begin-button"><span>Start<span></button>
    `

    buttonContainer.innerHTML = buttonHTML;

    let button = document.getElementById('begin-button')

    let introJumpScare = '../static/assets/audio/jump_scares/jump_scare_one.wav'

    button.addEventListener('click', () => {
        // pass audioClip, audioLevel
        playSound(introJumpScare, 1);
        let theImage = '../static/assets/images/pumpkin-992318_1280.png';
        let theElement = document.getElementById('pumpkin-scare');

        jumpScare(theElement, theImage);
    })

    headlineContainer.style.opacity = `.2`;
}


function drawBorder() {
    console.log("loaded")
    
    const border = document.getElementById('story_border_path');

    border.classList.add('draw');
}