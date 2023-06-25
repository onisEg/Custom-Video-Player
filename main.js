
// catch elemets 
const player = document.querySelector('.player');
const video = player.querySelector('video')
const toggle = player.querySelector('.toggle')
const ranges = player.querySelectorAll('[type="range"]')
const skipBtns = player.querySelectorAll('[data-skip]')
const progresss = player.querySelector('.progresss')
const fill = player.querySelector('.fill')


// functions
const playAndPause = () => {
    video.paused ? video.play() : video.pause()
}
const updataBtn = () => {
    video.paused ? toggle.textContent = '▶️' : toggle.textContent = '⏸️'
}
function skiping() {
    video.currentTime += parseFloat(this.dataset.skip)
}
function handelRanges() {
    video[this.name] = this.value
}
function updateTimeing() {
    const percent = (video.currentTime / video.duration) * 100;
    fill.style.flexBasis = `${percent}%`
}

function scrup(e) {
    video.currentTime = (e.offsetX / progresss.offsetWidth) * video.duration
}

// hook up listnener
video.addEventListener("click", playAndPause);
toggle.addEventListener("click", playAndPause)

video.addEventListener('play', updataBtn)
video.addEventListener('pause', updataBtn)
skipBtns.forEach((skip) => skip.addEventListener('click', skiping))

ranges.forEach((range) => range.addEventListener('click', handelRanges))
ranges.forEach((range) => range.addEventListener('mousemove', handelRanges))

video.addEventListener('timeupdate', updateTimeing)
progresss.addEventListener('click', scrup)

let mousedown = false;
progresss.addEventListener('mousemove', (e) => mousedown && scrup(e))
progresss.addEventListener('mousedown', () => mousedown = true)
progresss.addEventListener('mouseup', () => mousedown = false)
progresss.addEventListener('click', scrup)