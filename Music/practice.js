function play () {
var cNote = document.getElementById('cAudio');
var dNote = document.getElementById('dAudio');
var eNote = document.getElementById('eAudio');
var fNote = document.getElementById('fAudio');
var gNote = document.getElementById('gAudio');
var aNote = document.getElementById('aAudio');
var bNote = document.getElementById('bAudio');

document.getElementById('c').addEventListener('mousedown', e => {
    cNote.currentTime = 0;
    cNote.play();
});
document.getElementById('d').addEventListener('mousedown', e => {
    dNote.currentTime = 0;
    dNote.play();
});
document.getElementById('e').addEventListener('mousedown', e => {
    eNote.currentTime = 0;
    eNote.play();
});
document.getElementById('f').addEventListener('mousedown', e => {
    fNote.currentTime = 0;
    fNote.play();
});
document.getElementById('g').addEventListener('mousedown', e => {
    gNote.currentTime = 0;
    gNote.play();
});
document.getElementById('a').addEventListener('mousedown', e => {
    aNote.currentTime = 0;
    aNote.play();
});
document.getElementById('b').addEventListener('mousedown', e => {
    bNote.currentTime = 0;
    bNote.play();
});
}