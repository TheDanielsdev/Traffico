var btn = document.getElementById('btn').addEventListeners('click', subscribeBtn);


function subscribeBtn() {
    var xhr = new XmlHttpRequest();

    xhr.open('POST', 'url', true);

    xhr.onLoad = function() {
        if(this.status == 200) {

        } else {

        }
    }
    xhr.send(String);
}

//I am going to get the subscribe button from here and connect it to firebase or formsubmit