 function add() {
     return function (n1,n2) {
        return n1+n2
     }
 }


 console.log(add()(1,2))