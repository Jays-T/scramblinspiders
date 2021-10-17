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
        
        if (user_choice === "credits") {
            let choice_should_be = "start";

            if (choice_should_be === choice.users_choice) {
                return choice.options
            }
        } 
        else if (user_choice === choice.users_choice) {
            return choice.options
        }
    }
}

// options is story options object based on user choice
export function displayStory(options) {
    console.log(`next choices: ${options.next_choices}`)

    let paragraph;
    let audioClip;
    let audioVolume;
    let audioDelay;

    // function on line 89 takes in currentOptions to persist data on callBack to this function
    let currentOptions = options;

    switch(step){
            case 0:
                console.log('first step')
                paragraph = options.scene_text.para_one;
                audioClip = options.intro_audio;
                break
            case 1:
                console.log('second step')
                paragraph = options.scene_text.para_two;
                // need to add and define audio path
                break
            case 2:
                console.log('third step')
                paragraph = options.scene_text.para_last;
                break
        }


    let storyText;

    if (step === 2) {
        // on third step (step is 2) the next three branch options will be displayed

        if (options.next_choices[0] === "credits" || options.next_choices[0] === "death") {
            storyText = `
            <div class="row story">
                <div class="col col-md-8 offset-md-2">
                    <p class="story-text text-center">${paragraph}</p>
                </div>
            </div>
            <div class="row story-button">
                <div class="col col-md-8 offset-md-2 text-center d-flex flex-column justify-content-center align-items-end">
                    <div class="row">
                        <div class="col col-12">
                            <button data-choice="${options.next_choices[0]}" class="creepy-text next-choice">${options.next_choices[0]}</button>
                        </div>
                    </div> 
                </div>
            </div>
            `
        }
        else {
            storyText = `
            <div class="row story">
                <div class="col col-md-8 offset-md-2">
                    <p class="story-text text-center">${paragraph}</p>
                </div>
            </div>
            <div class="row story-button">
                <div class="col col-md-8 offset-md-2 text-center d-flex flex-column justify-content-center">
    
                    <div class="row">
                        <div class="col col-md-4">
                            <button data-choice="${options.next_choices[1]}" class="creepy-text next-choice">${options.next_choices[1]}</button>
                        </div>
                        <div class="col col-md-4">
                            <button data-choice="${options.next_choices[0]}" class="creepy-text next-choice">${options.next_choices[0]}</button>
                        </div>
                        <div class="col col-md-4">
                            <button data-choice="${options.next_choices[2]}" class="creepy-text next-choice">${options.next_choices[2]}</button>
                        </div>
                    </div> 
                </div>
            </div>
            `
        }
        step = 0;
    }
    else {
        storyText = `
        <div class="row story">
            <div class="col-sm-12 col-md-8 offset-md-2 d-flex flex-column justify-content-center">
                <p class="story-text text-center">${paragraph}</p>
            </div>
        </div>
        <div class="row story-button">
            <div class="col-sm-12 col-md-8 offset-md-2 text-center delay-text">
            <button id="next-step" class="creepy-text">continue...</button>
            </div>
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

    // If scene or paragraph has audio
    // Set values from object
    // Call playSound and pass in values 
    if (options.scene_audio) {
        audioClip = options.scene_audio;
        audioVolume = options.scene_audio_volume;
        audioDelay = options.scene_audio_delay;

        playSound(audioClip, audioVolume, audioDelay)
    }
}