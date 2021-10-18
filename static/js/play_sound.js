
export function playSound(audioClip, audioLevel, audioDelay) {

    if (audioDelay === 0) {
        let sound = new Howl({
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
            let sound = new Howl({
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
