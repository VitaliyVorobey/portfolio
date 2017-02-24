var modal = document.getElementById('myModal');
var img = document.getElementsByClassName('img');
var span = document.getElementsByClassName("close")[0];
var imgModal = document.getElementById('img01');
window.onclick = function(e) {
    if (e.target == modal || e.target == span) {
        modal.classList.add ("hidden");
    }
    // if (e.target == img) {
    //     modal.classList.remove("hidden");
    //     imgModal.style.backgroundImage = "url('http://68.media.tumblr.com/566ab861f58d611ab3d7b9dcacecccd0/tumblr_okva7fxR5J1u4sioio1_500.jpg')";
    // }
};
for (var i=0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.classList.remove("hidden");
        imgModal.classList.add ("")
    };
}
