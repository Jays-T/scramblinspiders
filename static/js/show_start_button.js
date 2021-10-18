import { getStoryOptions, displayStory, clearStoryContainer } from "./display_story.js";
import { playSound } from "./play_sound.js";
import { jumpScare } from "./jump_scare.js";
import { animatedBorder } from "./animated_border.js";

export function showAnimatedBorder() {
    borderContainer.innerHTML = animatedBorder;
}

export function showBeginButton() {
    let buttonContainer = document.getElementById('begin-story');

    // Set choice to start for story choices
    buttonContainer.classList.add('fade-in');

    let buttonHTML = `
    <button id="begin-button" class="creepy-text" data-choice="start">Start</button>
    `;

    buttonContainer.innerHTML = buttonHTML;

    let button = document.getElementById('begin-button');

    let scareContainer = document.getElementById('pumpkin-scare');
    let introJumpScareAudio = '../static/assets/audio/jump_scares/jump_scare_one.mp3';
    let scareImage = '../static/assets/images/pumpkin-992318_1280.png';

    button.addEventListener('click', () => {
        // pass audioClip, audioLevel
        playSound(introJumpScareAudio, 1);
        // pass Element, image
        jumpScare(scareContainer, scareImage);

        
        // choice at this point will be 'start'
        const begin_story_path = getStoryOptions(button.dataset.choice);
        clearStoryContainer();

        // pass in story options
        // choice at this point will be 'start'
        displayStory(begin_story_path);
    })

    // Fade headline to .2
    headlineContainer.classList.add('fade-mostly');
}
