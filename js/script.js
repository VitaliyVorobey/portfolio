var modal = document.getElementById('myModal');
var img = document.getElementsByClassName('img');
var span = document.getElementsByClassName("close")[0];
var imgModal = document.getElementById("imgModal");
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
        imgModal.style.backgroundImage = "url('../img/foto1.jpg')";
    };
}

// alert("The website is under construction");

// function ChangeBackgroungImageOfTab(imgModal, imagePrefix)
// {
//     var urlString = 'url(img/' + imagePrefix + '.jpg)';
//     document.getElementById(imgModal).style.backgroundImage =  urlString;
// }


// var elLarge = document.getElementsByClassName('large-img');
// for (var t=0; t < elLarge.length; t++) {
//     elLarge[t].onmouseover = function() {
//         elLarge.style.display = "none";};
//
// }
// function mouseOver() {
//     elLarge.style.color = "red";
// }
// var container = document.getElementById('icon');
// var elements = container.getElementsByClassName('large-img');
// for(var x = 0; x < elements.length; x++) {
//     elements[x].addEventListener("mouseover",function(){
//         this.attribute("src").mat = "img/LinkedInW.png";
//
//     },false);
//     elements[x].addEventListener("mouseout",function(){
//         this.src = "img/LinkedIn.png";
//
//     },false);
// }
$(function() {
    $("#icon").find("img")
        .mouseover(function() {
            var src = $(this).attr("src").match(/[^\.]+/) + "W.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("W.png", ".png");
            $(this).attr("src", src);
        });
});

