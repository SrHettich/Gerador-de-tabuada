function gerar()
{
    var num = document.getElementById('num')
    var n = Number(num.value)
    var tab = document.getElementById('tab')

    if(num.value.length == 0)
    {
        window.alert('Por favor digite um número!')
    }

    else
    {
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++)
        {
            var opt = document.createElement('option')
            opt.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(opt)
        }
        
    }
}