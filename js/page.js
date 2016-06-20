/**
 * Created by Dimitar on 6/20/2016.
 */
var croppedPicture = false;
var mq = window.matchMedia("(max-width: 767px)");
mq.addListener(WidthChange);
WidthChange(mq);

var haightStreetImage = $("")

function WidthChange(mq) {
    if (mq.matches && !croppedPicture) {
        croppedPicture = true;
        console.log("PICTURES ARE NOW CROPPED")

    } else if(!mq.matches && croppedPicture) {
        croppedPicture = false;
        console.log("PICTURES ARE NO LONGER CROPPED");
    }
    }
