//alert("david");

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}

async function palabras(){
    //Do what you want here 
    var list = ["a","e","i","o","u"];
    for (var i = 0; i < document.getElementById("cero").value; i++) {
    	document.getElementById("vocal").innerHTML = list[Math.floor(Math.random() * list.length)];
    	await delay(document.getElementById("uno").value);
    	document.getElementById("vocal").innerHTML = "";
    	await delay(document.getElementById("dos").value);
    }
}


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
