export function playSound(audioClip, audioLevel, audioDelay) {

    console.log(audioClip)

    if (audioDelay === 0) {
        let sound = new Howl({
            src: [audioClip],
            volume: audioLevel,
            onend: () => {
                console.log('played')
            }
        });
        sound.play();

    }
    else {
        setTimeout(() => {
            let sound = new Howl({
                src: [audioClip],
                volume: audioLevel,
                onend: () => {
                    console.log('played')
                }
            });
            sound.play();
    
        }, audioDelay)
    }
}