function calcular() {
	var txtv = window.document.getElementById('txtvel')
	var res = window.document.querySelector("div#res")
	var vel = Number(txtv.value)
	res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong>Km/h</p>`
	if (vel > 60) {
		res.innerHTML += `<p>Voce está <strong>MULTADO</strong> por excesso de velocidade</p>`
	}
	res.innerHTML += `Dirija sempre com cinto de segurança!`
}