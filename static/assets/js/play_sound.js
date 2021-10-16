export function playSound(audioClip, audioLevel) {

    let sound = new Howl({
        src: [audioClip],
        volume: audioLevel,
        onend: () => {
            console.log('played')
        }
    });
    sound.play();
}