
export function jumpScare(element, image) {

    let decider = Math.floor(Math.random() * 20);
    let scare;

    switch(decider) {
        case 0: case 2: case 3: case 5: case 6: case 8: case 9: case 10: case 12: case 12: case 14: case 16: case 17: case 20: case 11: case 15:
            scare = true;
            break
        case 1: case 4: case 7: case 13: case 18: case 19:
            scare = false;
            break
    }

    if (scare) {
        console.log(scare)
        let imgElem = `
        <img id="scare-img" src="${image}" alt="scare" style="height: 100vh; width: 100vw; position: absolute; top: 0; left: 0;
        box-shadow: inset 0 0 10px rgb(240, 129, 1),
        inset 0 0 20px rgb(240, 129, 1),
        inset 0 0 40px rgb(240, 129, 1),
        inset 0 0 80px rgb(240, 129, 1),
        inset 0 0 120px rgb(240, 129, 1);" />
        `
        setTimeout(() => {
            element.innerHTML = imgElem;
    
        }, 20)
    
        setTimeout(() => {
            let elemRemove = document.getElementById('scare-img');
            elemRemove.remove()
        }, 600)
    }
}
