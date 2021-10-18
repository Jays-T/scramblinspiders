import { choices } from "./story_choices.js";
import { playSound } from "./play_sound.js";
import { endStory } from "./end_story.js";

// count steps though each SCENE
// to determine which SCENE should be displayed next
// and when to display links to the next ACT
var step = 0;

// To clear story container before each SCENE
export function clearStoryContainer() {
    storyContainer.innerHTML = '';
}

export function getStoryOptions(user_choice) {
    for (let choice of choices) {
        if (user_choice === "try again") {
            return false
        } else {
            if (user_choice === choice.users_choice) {
                return choice.options
            }
        }
    }
}

// options is story options object based on user choice
export function displayStory(options) {
    console.log(`next choices: ${options.next_choices}`)

    let paragraph;
    let sceneImage;
    let audioClip;
    let audioVolume;
    let audioDelay;
    let sceneText;

    // function on line 89 takes in currentOptions to persist data on callBack to this function
    let currentOptions = options;

    // If final scene reached display credits
    let isCredits = options.scene_credits;

    if (isCredits) {
        console.log("it's credits")
        paragraph = options.scene_text.ending_credits;
        sceneText = `
            <div class="row d-flex flex-column align-items-center justfy-content-space-around" id="story-title">
                <div class="col text-center d-flex flex-column justify-content-center mt-2">
                    <div id="story-paragraph" class="story-text text-center align-self-center credits">${paragraph}</div>
                </div>
                <div class="col text-center d-flex justify-content-center height-30">
                    <div id="story-choices" class="align-self-center">
                        <button id="end-story" data-choice="${options.next_choices[0]}" class="creepy-text fade-in-long">${options.next_choices[0]}</button>
                    </div>
                </div>
            </div>
        `
        storyContainer.classList.add('fade-in')
        storyContainer.innerHTML = sceneText

        let endTheStory = document.getElementById('end-story');
        if (endTheStory){
            endTheStory.addEventListener('click', () =>{
                endStory();
            })
        }
        return
    }

    // Pick paragraph based on current step
    switch(step){
            case 0:
                console.log('first step')
                paragraph = options.scene_text.para_one;
                audioClip = options.scene_audio;
                audioVolume = options.scene_audio_volume;
                audioDelay = options.scene_audio_delay;
                break
            case 1:
                console.log('second step')
                paragraph = options.scene_text.para_two;
                audioClip = options.para_two_audio;
                audioVolume = options.para_two_audio_volume;
                audioDelay = options.para_two_audio_delay;
                break
            case 2:
                console.log('third step')
                paragraph = options.scene_text.para_last;
                audioClip = options.para_three_audio;
                audioVolume = options.para_three_audio_volume;
                audioDelay = options.para_three_audio_delay;
                break
        }

    if (step === 2) {

        // on third step (step is 2) the next three branch options will be displayed
        
        let nextChoice = options.next_choices[0];
        // can be refactored to iterate over the values in next_choices
        if (options.next_choices.length === 1) {

            sceneText = `
                <div class="row d-flex flex-column align-items-center justfy-content-space-around" id="story-title">
                    <div class="col text-center d-flex justify-content-center mt-5">
                        <p id="story-paragraph" class="story-text text-center align-self-center fade-in">${paragraph}</p>
                    </div>
                    <div class="col text-center d-flex justify-content-center mt-5 height-30">
                        <div id="story-choices" class="align-self-center">
                            <button data-choice="${nextChoice}" class="creepy-text next-choice fade-in-long">${nextChoice}</button>
                        </div>
                    </div>
                </div>
            `
        }
        else {
            sceneText = `
                <div class="row d-flex flex-column align-items-center justfy-content-space-around" id="story-title">
                    <div class="col text-center d-flex justify-content-center mt-5">
                        <p id="story-paragraph" class="story-text text-center align-self-center fade-in">${paragraph}</p>
                    </div>
                    <div class="col text-center d-flex justify-content-center mt-5 height-30">
                        <div id="story-choices" class="align-self-center">
                            <button data-choice="${options.next_choices[0]}" class="creepy-text next-choice fade-in-long">${options.next_choices[0]}</button>
                            <button data-choice="${options.next_choices[1]}" class="creepy-text next-choice fade-in-long">${options.next_choices[1]}</button>
                            <button data-choice="${options.next_choices[2]}" class="creepy-text next-choice fade-in-long">${options.next_choices[2]}</button>
                        </div>
                    </div>
                </div>
            `
        }
        // Reset scene step to zero for next ACT
        step = 0;
    }
    else {
        sceneText = `
            <div class="row d-flex flex-column align-items-center justfy-content-space-around" id="story-title">
                <div class="col text-center d-flex justify-content-center mt-5">
                    <p id="story-paragraph" class="story-text text-center align-self-center fade-in">${paragraph}</p>
                </div>
                <div class="col text-center d-flex justify-content-center mt-5 height-30">
                    <div id="story-choices" class="align-self-center">
                        <button id="next-step" class="creepy-text fade-in-long">continue...</button>
                    </div>
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
    storyContainer.innerHTML = sceneText

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

            let nextStoryOption = getStoryOptions(button.dataset.choice);
            
            if (!nextStoryOption) {
                endStory();
                return
            }
            else {
                clearStoryContainer();
                // callBack to this function, displayStory() with nextStoryOption
                displayStory(nextStoryOption);
            }
        }));
    }

    // If scene or paragraph has audio
    // Values have been set from switch (based on scene step) 
    if (audioClip) {
        playSound(audioClip, audioVolume, audioDelay)
    }
}