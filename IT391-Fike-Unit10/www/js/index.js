/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    var submit = document.getElementById("submit");
    var bin = document.getElementById("bin");
    var binVal = null;

    bin.onclick = () => {
        binVal = document.getElementById("bin");
    }

    submit.onclick = () => {
        checkForCanvas();
        var msg = document.getElementById("msg").value + " ";
        var wid = document.getElementById("wid").value;
        var ht = document.getElementById("ht").value;
        var bckColor = document.getElementById("bckColor").value;
        var txtColor = document.getElementById("txtColor").value;
        
        if(binVal == true) {
            msg = binConv(msg);
        }
        genImage(msg, wid, ht, bckColor, txtColor);
    }

    var clear = document.getElementById("clear");
    clear.onclick = () => {
        console.log(typeof(document.getElementById("bin").checked));
        checkForCanvas();
        document.getElementById("msg").value = "";
        document.getElementById("wid").value = "";
        document.getElementById("ht").value = "";
        document.getElementById("bckColor").value = "#000000";
        document.getElementById("txtColor").value = "#000000";
    }
}

function genImage(msg, wid, ht, bckColor, txtColor) {
    let canvas = document.createElement('canvas');
    context = canvas.getContext("2d");
    let container = document.createElement('div');
    document.body.appendChild(container);
    container.appendChild(canvas);
    canvas.width = wid;
    canvas.height = ht;
    context.fillStyle = bckColor;
    context.fillRect(0, 0, wid, ht);
    context.font = "12px Times New Roman";
    context.fillStyle = txtColor;
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

function checkForCanvas() {
    let element = document.getElementById("theForm").nextSibling;
    if (typeof (element) != 'undefined' && element != null) {
        element.parentNode.removeChild(element);
    }
}

function binConv(msg) {
    let binMsg = "";
    for (var i = 0; i < msg.length; i++) {
        binMsg += msg[i].charCodeAt(0).toString(2) + " ";
    }
    return binMsg;
}
