
export function jumpScare(element, image) {
    let imgElem = `
    <img id="scare-img" src="${image}" alt="scare" style="height: 100vh; width: 100vw; position: absolute; top: 0; left: 0;
    box-shadow: inset 0 0 10px var(--p-orange),
    inset 0 0 20px var(--p-orange),
    inset 0 0 40px var(--p-orange),
    inset 0 0 80px var(--p-orange),
    inset 0 0 120px var(--p-orange);" />
    `
    setTimeout(() => {
        element.innerHTML = imgElem;

    }, 20)

    setTimeout(() => {
        let elemRemove = document.getElementById('scare-img');
        elemRemove.remove()
    }, 600)
}