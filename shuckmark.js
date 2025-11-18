const shucks = document.createElement('img');
const audio = document.createElement('audio');
const shucksimg = shucks.style;
shucks.setAttribute('src','https://i.redd.it/wo0o22rsr9hf1.gif');
shucksimg.position ='fixed';
shucksimg.width ='1000px';
shucksimg.bottom ='1px';
shucksimg.zIndex ='9999';
audio.setAttribute('src','https://github.com/RyderTheApple/ShuckSite/raw/refs/heads/main/likebell2.mp3');
audio.addEventListener('canplaythrough',()=>{
document.body.appendChild(shucks);
document.body.appendChild(audio);
audio.play();
setTimeout(()=>{
    shucks.remove();
}, 3480);
setTimeout(()=>{
    audio.remove();
},4000);
});
