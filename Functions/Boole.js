function delta_B() {
    a = parseInt($('#bot').val())
    b = parseInt($('#top').val())
    div = parseInt(valor_numerico)

    val = (b-a)/4

    return val;
}

function CalcularPorJorgeBoole(){
    const _delta = delta_B();
    const _func = $('#dataTextArea').val()
    var x = [0]
    var _x = []
    var complemento_operacion = parseInt(valor_numerico)

    var suma_control = 0

    iteraciones.forEach(element => {
        x.push(x[x.length-1] + _delta)
    });

    // if(x[x.length-1] != b){
    //     alert('Ocurrio un problema con los datos... Se esperaba {'+b+'}; obtenido{'+x[x.length-1]+'}')
    //     return
    // }

    for(i = 0; i < iteraciones.length; i++){

        control = 0

        inc_elevado =  Math.pow(x[i], (data_elevado["isElevado"] ? (data_elevado["caracter"] == "incognita" ? parseInt(data_elevado["valor"]) : 1) : 1))
        con_elevado =  Math.pow(complemento_operacion, parseFloat(data_elevado["isElevado"] ? (data_elevado["caracter"] == "constante" ? parseInt(data_elevado["valor"]) : 1) : 1))

        switch(valor_operando){
            case "+":
                control = iteraciones[i] * MathOperator(inc_elevado + con_elevado)
            break

            case "-":
                control = iteraciones[i] * MathOperator(inc_elevado - con_elevado)
            break

            case "*":
                control = iteraciones[i] * MathOperator(inc_elevado * con_elevado)
            break

            case "/":
                control = iteraciones[i] * MathOperator(inc_elevado / con_elevado)
            break
        }

        suma_control += control
        _x.push(control)

        tr_tbody = $('<tr />')
        tr_tbody.append(`<th scope="row">${x[i]}</th><td>${$('.func.selected').text()}(${$('#dataTextArea').val()})</td><td>${iteraciones[i]} * ${$('.func.selected').text()}(${inc_elevado} ${valor_operando} ${con_elevado})</td><td>${control}</td>`)
        $('#TableResult tbody').append(tr_tbody)

    }   

    tr_tbody = $('<tr />')
    tr_tbody.append(`<th scope="row">Σ</th><td></td><td></td><td><strong>${suma_control}</strong></td>`)
    $('#TableResult tbody').append(tr_tbody)


    var result = ((2*_delta)/45)*suma_control

    $('#resultTextArea').val(result)

}