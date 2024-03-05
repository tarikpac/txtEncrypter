function criptografar() {
    let txtCripto = document.getElementById("textToEncrypt").value;
    txtCripto = txtCripto.replace(/e/g, "enter");
    txtCripto = txtCripto.replace(/i/g, "imes")
    txtCripto = txtCripto.replace(/a/g, "ai")
    txtCripto = txtCripto.replace(/o/g, "ober")
    txtCripto = txtCripto.replace(/u/g, "ufat")
    return txtCripto
}

document.getElementById("botaoCripto").addEventListener("click", function(){
   let textoCriptografado = criptografar();
    document.getElementById("resultadoCripto").textContent = textoCriptografado;
})

function descriptografar() {
    let decryptTxt = document.getElementById("textToEncrypt").value;
    decryptTxt = decryptTxt.replace(/enter/g, "e")
    decryptTxt = decryptTxt.replace(/imes/g, "i")
    decryptTxt = decryptTxt.replace(/ai/g, "a")
    decryptTxt = decryptTxt.replace(/ober/g, "o")
    decryptTxt = decryptTxt.replace(/ufat/g, "u")
    return decryptTxt;
}

document.getElementById("botaoDescripto").addEventListener("click", function(){
    let descriptar = descriptografar();
    document.getElementById("resultadoCripto").textContent = descriptar;
})

document.getElementById("btn-copiar").addEventListener("click", function(){
    let textoParaCopiar = document.getElementById("resultadoCripto").innerText;

    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        console.log("Texto copiado com sucesso")
    }), function(err) {
        console.error("Erro ao copiar: ", err);
    }
})
