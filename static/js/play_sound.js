
export function playSound(audioClip, audioLevel, audioDelay) {

    if (audioDelay === 0) {
        const sound = new Howl({
            src: [audioClip],
            volume: audioLevel,
            onplay: () => {
                sound.fade(1, .4, 7000);
            },
            onend: () => {
                console.log('played')
            }
        });
        sound.play();
    }
    else {
        setTimeout(() => {
        const sound = new Howl({
                src: [audioClip],
                volume: audioLevel,
                onplay: () => {
                    sound.fade(1, .4, 7000);
                },
                onend: () => {
                    console.log('played')
                }
            });
        sound.play();
            
        }, audioDelay)
    }
}

// To toggle sound on/off
const toggleAudioButton = document.getElementById('toggle-audio-button')
const swapContent = document.getElementById('audio-experience');

const intialExperienceValue = `Best experienced with <span class="creepy-text">Sound</span>`;
const featureNotReady = `<span class="cursed-text" style="color: red;">Beware!</span> this feature not active`

    toggleAudioButton.addEventListener('click', () => {

        swapContent.innerHTML = featureNotReady;

        setTimeout(() => {
            swapContent.innerHTML = intialExperienceValue
        }, 800)

    });
