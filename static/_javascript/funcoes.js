function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value)
    tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}

function trocaLogo(foto) {

    document.getElementById("icone").src = "{{url_for('static', filename=" + foto + ")}}"

}