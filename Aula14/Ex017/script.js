
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um numero!')    
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //limpa o select
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c }`
            tab.appendChild(item)
            c++
        }

    }
}