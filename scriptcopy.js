const keys = document.querySelectorAll('.key')

keys.forEach(key =>{
    key.addEventListener('click',()=>{
    playNote(key);
    const rect = key.getBoundingClientRect();
    x=(rect.left+rect.right)/2
    y=rect.bottom
    drawDot(x, y)
    function drawDot(x, y) {
        const img = document.createElement('img');
        img.src = 'e.png';
        img.classList.add('dot');
        img.style.position = 'absolute';
        img.style.width = '120px';
        img.style.height = '120px';
        img.style.left = `${x - 60}px`;
        img.style.top = `${y-80}px`;
        key.appendChild(img);
        paul=img
    }
})
})

function playNote(key){
    
    const Noteaudio = document.getElementById(key.dataset.note)
    Noteaudio.currentTime = 0
    Noteaudio.play()
    key.classList.add('active')

    const speedControl = document.getElementById('speedControl');
    Noteaudio.playbackRate = speedControl.value;

    Noteaudio.addEventListener('ended',() => {
        key.classList.remove('active');
        clearDots()
    })
}
function clearDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.remove());
}