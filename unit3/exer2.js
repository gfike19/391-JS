document.addEventListener("load", function () {
    let form = document.querySelector("form");
    let num = document.querySelector("input[name=num]");
    let results = document.getElementById("results");

    form.addEventListener("submit", function () {

        function fibo(num) {
            var fibNum;

            if (num == 0) {
                fibNum = 0;
            } else {
                if (num == 1) {
                    fibNum = 1;
                } else {
                    fibNum = num + 0;
                    fibNum = fibo(fibNum - 2) + fibo(fibNum - 1);
                }
            }

            return fibNum;
        }

        function writeFibo(topFib) {
            for (var i = 0; i <= topFib; i++) {
                results.innerHTML += "Fibonacci(" + i + ") = " + fibo(i) + "\n";
                document.write(fibo(i));
                console.log(i);
            }
        }

        writeFibo(num);
    });
});


// function fibo(num) {
//     var fibNum;

//     if(num == 0){
//         fibNum = 0;
//     } else {
//         if(num == 1){
//             fibNum = 1;
//         } else {
//             fibNum = num + 0;
//             fibNum = fibo(fibNum - 2) + fibo(fibNum -1);
//         }
//     }

//     return fibNum;
// }

// function writeFibo(topFib) {
//     for (var i = 0; i <= topFib; i++) {
//         console.log("Fibonacci(" + i + ") = " + fibo(i));
//     }
// }

// writeFibo(10);