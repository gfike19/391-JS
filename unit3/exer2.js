function fibo(num) {
    var fibNum;

    if(num == 0){
        fibNum = 0;
    } else {
        if(num == 1){
            fibNum = 1;
        } else {
            fibNum = num + 0;
            fibNum = fibo(fibNum - 2) + fibo(fibNum -1);
        }
    }

    return fibNum;
}

function writeFibo(topFib) {
    for (var i = 0; i <= topFib; i++) {
        console.log("Fibonacci(" + i + ") = " + fibo(i));
    }
}

writeFibo(10);