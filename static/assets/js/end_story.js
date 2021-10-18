import { clearStoryContainer } from "./display_story.js"

export function endStory() {
    clearStoryContainer();
    setTimeout(() => {
        let appliedHTML = `
            <div class="row" id="animated-border-container">

            </div>
            <div class="row d-flex flex-column align-items-center justfy-content-space-around" id="story-title">
                <div class="col text-center d-flex justify-content-center">
                    <h1 id="story-headline" class="align-self-end"></h1>
                    <p id="landing-content">
                    </p>
                </div>
                <div class="col text-center d-flex justify-content-center begin-story-button mt-5">
                    <div id="begin-story" class="align-self-start">
                        <button id="begin-button" class="cursed-text align-self-center">Begin story...again</button>
                    </div>
                </div>
            </div>
        `
        storyContainer.innerHTML = appliedHTML;

        let endStoryButton = document.getElementById('begin-button');

        if (endStoryButton) {
            endStoryButton.addEventListener('click', () => {
                landingContent.remove()
                headlineContainer.innerHTML = "";
                location.reload();
            });
        }
    }, 300)
}