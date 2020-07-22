function main(){
    let msg = document.getElementById("msg").value + " ";
    let wid = document.getElementById("wid").value;
    let ht = document.getElementById("ht").value;
    let disp = document.getElementById("disp");

    if(disp.innerHTML != "") {
        disp.innerHTML = "";
    }

    if(msg == ""){
        disp.innerHTML += "<p>Please enter some text.</p>";
    }

    if(msg.length < 5) {
        disp.innerHTML += "<p>Text is too short.</p>";
    }

    if(isNaN(ht) || isNaN(wid)) {
        disp.innerHTML += "<p>Width and height must be numbers</p>";
    }

    if(ht == "" || wid == "") {
        disp.innerHTML += "<p>Height and width can't be empty</p>";
    }

    if(msg.length >= 5 && !isNaN(ht) && !isNaN(wid)){
        genImage(msg, wid, ht);
    }
}

function genImage(msg, wid, ht) {
    let canvas = document.createElement('canvas');
    context = canvas.getContext("2d");
    let container = document.createElement('div');
    document.body.appendChild(container);
    container.appendChild(canvas);
    canvas.width = wid;
    canvas.height = ht;
    context.fillStyle = "black";
    context.fillRect(0, 0, wid, ht);
    context.font = "12px Times New Roman";
    context.fillStyle = "green";
    let idx = 0;

    for (let x = 0; x < ht; x += 18) {
        for (let y = 0; y < wid; y += 18) {
            context.fillText(msg[idx], y, x)
            idx++;

            if (idx > msg.length - 1) {
                idx = 0;
            }
        }
    }
}