
function criarTabela() {

    //criar os valores do formulario 
    var nome_completo = document.getElementById("nome_completo").value;
    var matricula = document.getElementById("matricula").value;
    var nota_1 = parseFloat(document.getElementById("Nota_1").value);
    var nota_2 = parseFloat(document.getElementById("Nota_2").value);

    // Calcula a média
    var media = (nota_1 + nota_2) / 2;

    // situação do aluno
    var situacao = media >= 5 ? "Aprovado" : "Reprovado";

    //cria a tabela
    var tabelaHTML = "<table border='1'><tr><th>Nome Completo</th><th>Matricula</th><th>Nota 1°</th><th>Nota 2°</th><th>Media</th><th>Situação</th></tr>";
    tabelaHTML += "<tr><td>" + nome_completo + "</td><td>" + matricula + "</td><td>" + nota_1 + "</td><td>" + nota_2 + "</td><td>" + media.toFixed(2) + "</td><td>" + situacao + "</td></tr>";
    tabelaHTML += "</table>";

    // Exibe a tabela na página
    document.getElementById("tabela").innerHTML = tabelaHTML;
}