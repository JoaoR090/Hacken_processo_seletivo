function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa != ""){
        for(let dado of dados){
            if (dado.nome.toLowerCase().includes(campoPesquisa) || dado.sinopse.toLowerCase().includes(campoPesquisa)){
                resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" taget="_blank" >${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">${dado.sinopse}</p>
                    <a href="${dado.mais_informacoes}" target="_blank">Mais informações.</a>
                </div>
            `
            }}};
    if (!resultados) {
        resultados = `
        <p>Nada foi encontrado</p>
        
    `
    }
    section.innerHTML = resultados
}