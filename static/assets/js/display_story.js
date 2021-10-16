import { choices } from "./story_choices.js";
import { playSound } from "./play_sound.js";

// count steps though each part of story
// to determine which text should be displayed next
var step = 0;

export function clearStoryContainer() {
    storyContainer.innerHTML = '';
}

export function getStoryOptions(user_choice) {
    for (let choice of choices) {
        if (user_choice === choice.users_choice) {
            return choice.options
        }
    }
}

// options is story options object based on user choice
export function displayStory(options) {
    console.log(`in display story: ${options.story_text.para_one}`)

    let paragraph;
    let audioClip;
    // function on line 89 takes in currentOptions to persist data on callBack to this function
    let currentOptions = options;

    switch(step){
            case 0:
                console.log('first step')
                paragraph = options.story_text.para_one;
                audioClip = options.intro_audio;
                break
            case 1:
                console.log('second step')
                paragraph = options.story_text.para_two;
                // need to add and define audio path
                break
            case 2:
                console.log('third step')
                paragraph = options.story_text.para_last;
                break
        }


    let storyText;

    if (step === 2) {
        // on third step (step is 2) the next three branch options will be displayed
        storyText = `
        <div style="display: flex; flex-direction: column;">
            <p>${paragraph}</p>
            <button data-choice="${options.next_choices[1]}" style="align-self: flex-end;" class="creepy-text next-choice">${options.next_choices[1]}</button>
            <button data-choice="${options.next_choices[0]}" style="align-self: flex-end;" class="creepy-text next-choice">${options.next_choices[0]}</button>
            <button data-choice="${options.next_choices[2]}" style="align-self: flex-end;" class="creepy-text next-choice">${options.next_choices[2]}</button>
        </div>
        `
        step = 0;
    }
    else {
        storyText = `
        <div style="display: flex; flex-direction: column;">
            <p class="story-text">${paragraph}</p>
            <button style="align-self: flex-end;" id="next-step" class="creepy-text">continue...</button>
        </div>
        `
        step += 1;
        console.log(`current step: ${step}`)
    }

    // set opacity to zero on the displayed story text in storyContainer
    let appliedStyle = `
        opacity: 0;
        `
    storyContainer.style = appliedStyle;
    storyContainer.innerHTML = storyText

    // fade in opacity on storyContainer
    for (let opacity = 0; opacity < 1.1; opacity = opacity + 0.1) {
        console.log("text fade in")
        setTimeout(() => {
            storyContainer.style.opacity = opacity;
        }, 600);
    }
    
    let nextButton = document.getElementById('next-step');
    // if there is an element with ID of next-step, pass currentOptions on callBack to displayStory()
    // currentOptions defined as options on line 26
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            displayStory(currentOptions);
        });
    }

    let nextChoiceButtons = Array.from(document.querySelectorAll('.next-choice'));
    // if the nextChoiceButtons exists, based on option selected (clicked on)
    // will pass dataset of users choice to getStoryOptions()
    if (nextChoiceButtons) {
        nextChoiceButtons.forEach(button => button.addEventListener('click', () => {
            console.log('YES, made it to level 2!!!')
            let nextStoryOption = getStoryOptions(button.dataset.choice);
    
            clearStoryContainer();
            // callBack to this function, displayStory() with nextStoryOption
            displayStory(nextStoryOption);

        }));
    }

    setTimeout(() => {
        playSound(audioClip, .3);
    }, 800)

}