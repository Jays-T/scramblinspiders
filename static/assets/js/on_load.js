import { drawBorder } from "./intro_animations.js";
import { showBeginButton } from "./show_start_button.js";
import { playSound } from "./play_sound.js";

function displayHeadline() {

    let headline = `
    Tales_of_<span class="creepy-text">Javascript</span>: <span>"The <span class="creepy-text cursed-text">curse</span> of the infinite recursive loop"</span>
    `

    let appliedStyle = `
    transition: all .3s ease-in-out;

    opacity: 0;
    `
    headlineContainer.style = appliedStyle;
    headlineContainer.innerHTML = headline;

    for (let opacity = 0; opacity < 1.1; opacity = opacity + 0.1) {
        setTimeout(() => {
            headlineContainer.style.opacity = opacity;
        }, 300);
    }

    }

const loadIn = window.addEventListener('load', () => {
    
    let introSound = '../static/assets/audio/background/static_noises/long_static_with_echo.wav';
    
    // pass audioClip, audioLevel
    playSound(introSound, .6);

    setTimeout(() => {
        displayHeadline()
    }, 4600)
    
    // draw the animated SVG border
    setTimeout(() => {
        drawBorder()
    }, 1000)

    setTimeout(() => {
        showBeginButton();
    }, 10000)
});

loadIn;