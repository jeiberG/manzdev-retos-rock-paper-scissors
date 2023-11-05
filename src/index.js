const info = document.querySelector(".info");
const hidden = document.querySelector(".hidden");
const form = document.querySelector(".form");
const normas = document.querySelector(".normas");

const armas = document.querySelectorAll(".arma");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const resUser = document.querySelector(".resUser");
const resCPU = document.querySelector(".resCPU");
const ptsUser = document.querySelector(".ptsUser");
const ptsCPU = document.querySelector(".ptsCPU");

const reset = document.querySelector(".reset");
const name = document.querySelector(".name");

if (name.innerText === "nombre") {
		var nombre = prompt("escribe tu nombre");
		name.innerText= nombre;
}

info.addEventListener("click",()=>{
	if (info.innerText === "?") {
		info.innerText="X";
		hidden.style.display="none";
		normas.style.display="flex";
	}else {
		info.innerText="?";
		hidden.style.display="flex";
		normas.style.display="none";
	}
})

armas.forEach(arma => {
	arma.addEventListener("click", () => {
	  	let elejido = arma.innerText;
	    conteo(num1,elejido);
	    conteo(num2,elejido);
	    setTimeout(() => {
	if (num1.innerText === num2.innerText) {
            		resUser.classList.remove("res","perdio","gano");
	            	resUser.classList.add("empate");
	            	resUser.innerText = "empate";
	            			

	            	resCPU.classList.remove("res","perdio","gano");
	            	resCPU.classList.add("empate");
	            	resCPU.innerText = "empate";
	            	
	            	
            	}else if ((num1.innerText === "🗿" && (num2.innerText === "✂️" || num2.innerText === "🦎")) ||
		            (num1.innerText === "📄" && (num2.innerText === "🗿" || num2.innerText === "🖖")) ||
		            (num1.innerText === "✂️" && (num2.innerText === "📄" || num2.innerText === "🦎")) ||
		            (num1.innerText === "🦎" && (num2.innerText === "📄" || num2.innerText === "🖖")) ||
		            (num1.innerText === "🖖" && (num2.innerText === "🗿" || num2.innerText === "✂️"))

            	) {
	            	resUser.classList.remove("res","empate","perdio");
	            	resUser.classList.add("gano");
	            	resUser.innerText = "ganador";
	            	ptsUser.innerText=parseInt(ptsUser.innerText)+1		

	            	resCPU.classList.remove("res","empate","gano");
	            	resCPU.classList.add("perdio");
	            	resCPU.innerText = "perdedor";
	            	
	            	
            	}else {
            		resUser.classList.remove("res","empate","gano")
	            	resUser.classList.add("perdio");
	            	resUser.innerText = "perdedor";
	            	

	            	resCPU.classList.remove("res","empate","perdio");
	            	resCPU.classList.add("gano");
	            	resCPU.innerText = "ganador";
	            	ptsCPU.innerText = parseInt(ptsCPU.innerText)+1
	            	
	            	
            	}
}, 3000);
	});
});

function conteo(element,elejido) {
    var count = 1;
    element.textContent = count;

    const interval = setInterval(() => {
            count++;
            element.textContent = count;
            if (count === 4) {
                clearInterval(interval);
                num1.innerText=elejido;
                
                const armasRandom = ["🗿", "📄", "✂️", "🦎", "🖖"];
				const elementoElegido = armasRandom[Math.floor(Math.random() * 5)];
	            num2.innerText = elementoElegido;
            };       
    }, 1000); // Cambia el valor de 1000 para ajustar la velocidad del conteo

}


reset.addEventListener("click",()=>{
	ptsUser.innerText= 0 ;
	ptsCPU.innerText=0 ;
	num1.innerText="...";
	num2.innerText="...";
	resUser.classList.remove("perdio","empate","gano")
	resUser.classList.add("res");
	resUser.innerText = ".....";
	resCPU.classList.remove("perdio","empate","gano")
	resCPU.classList.add("res");
	resCPU.innerText = ".....";

})





