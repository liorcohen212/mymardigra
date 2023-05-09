const btn =document.getElementById('btn');
const popupwrapper = document.getElementById('popupwrapper');
const close = document.getElementById('close');
btn.addEventListener('click',function() {
    popupwrapper.style.display = "block";
});
close.addEventListener('click', function() {
    popupwrapper.style.display = "none";
});