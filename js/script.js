/**
 * Created by Vitaliy on 22.02.2017.
 */
var shortcodes = ["BQGmReQjI47"];
document.addEventListener("DOMContentLoaded", function(){
    for (var i = 0; i < shortcodes.length; i++) {
        var item = '<a href="http://instagram.com/p/' + shortcodes[i] + '/media/?size=m" ><img src="http://instagram.com/p/' + shortcodes[i] + '/media/?size=t" alt="thumbnail" /></a>';
        document.getElementById("img1").innerHTML += item;
    }
});