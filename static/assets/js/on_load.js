import { drawBorder } from "./intro_animations.js";
import { showBeginButton, showAnimatedBorder } from "./show_start_button.js";
import { playSound } from "./play_sound.js";

function headlineOpacity(content) {

    headlineContainer.classList.remove('fade-in')
    headlineContainer.classList.add('fade-out')
    
    setTimeout(() => {
        headlineContainer.classList.remove('fade-out')
        headlineContainer.innerHTML = content
        headlineContainer.style.opacity = 0;
    }, 600)

    for (let opacity = 0; opacity < 1.1; opacity = opacity + 0.1) {
        setTimeout(() => {
            headlineContainer.style.opacity = opacity;
        }, 800);
    }    
}

function displayHeadline() {

    headlineContainer.classList.add('fade-in')

    let introPresents = `
    <span class="creepy-text">Scramblin Spiders Presents</span>
    `
    headlineContainer.innerHTML = introPresents;
    
    setTimeout(() => {
        let headline = `
        A<span class="creepy-text cursed-text"> Normal </span> night at the <span class="creepy-text">pub.</span>
        `
        headlineOpacity(headline);
    }, 2500)

}

function loadIn() {
    let introSound = './static/assets/audio/background/static_noises/long_static_with_echo.wav';
    
    // pass audioClip, audioLevel
    playSound(introSound, .6);

    

    setTimeout(() => {
        displayHeadline()
    }, 4600)
    
    // draw the animated SVG border
    setTimeout(() => {
        showAnimatedBorder();
        drawBorder()
    }, 1000)

    setTimeout(() => {
        showBeginButton();
    }, 10000)
}

let beginStory = document.getElementById('begin-story');

beginButton.addEventListener('click', () => {
    landingContent.remove()
    headlineContainer.innerHTML = "";
    beginStory.innerHTML = "";
    loadIn();
});
