var x = document.getElementById("tela-cript");


imagem ();
cript.addEventListener("click", function(){
	
	var y = x.value;
	var z = y.split('');
	
		for (var i = 0; i < z.length; i++) {
		
			if (z[i]=="a"){
				z[i]="ai";
			}else if (z[i]=="e"){
				z[i]="enter";
			}else if (z[i]=="i"){
				z[i]="imes";
			}else if (z[i]=="o"){
				z[i]="ober";
			}else if (z[i]=="u"){
				z[i]="ufat";
			}
			
		}
	
    var w= z.toString();
	var u= w.replace(/,/gi,'');
	campoTexto();
	document.getElementById('resultado').value = u;
	document.getElementById("tela-cript").value="";
	
	copia.addEventListener("click", function(){
		var textArea = document.getElementById('resultado');
		textArea.select();
		document.execCommand('copy');
		document.getElementById('resultado').value="";
		imagem();
	});
});
desCript.addEventListener("click", function(){
	var y = x.value;
	
	var a=y.replace(/ai/gi,"a");
	var e=a.replace(/enter/gi,"e");
	var i=e.replace(/imes/gi,"i");
	var o=i.replace(/ober/gi,"o");
	var u=o.replace(/ufat/gi,"u");
	
		
		
	var w= u.toString();
	campoTexto();
	document.getElementById('resultado').value = w;
	document.getElementById("tela-cript").value="";
	
	copia.addEventListener("click", function(){
		var textArea = document.getElementById('resultado');
		textArea.select();
		document.execCommand('copy');
		document.getElementById('resultado').value="";
		imagem();
	});

	
});


function imagem (){
	let tela=document.getElementById('campo');
	tela.innerHTML='<h2 class="imgManipulada"><img src="imagens/77.PNG"></h2>';
}
function campoTexto(){
	let tela=document.getElementById('campo');
	tela.innerHTML='<label for="mensagem"></label><textarea  placeholder="" cols="30" rows="31" id="resultado" class="campo-texto2" required></textarea><br><input type="submit" value="Copiar" class="botao" id="copia">';
}
