function pesquisar() {

    // console.log("Cliquei"); // Comentado para fins de debug

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo de pesquisa for vazio sai da função
    if (!campoPesquisa || campoPesquisa == " ") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    };
    campoPesquisa = campoPesquisa.toLowerCase();

    // console.log(campoPesquisa);

    // Inicializa strings vazias para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e constrói o HTML
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemeento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }
    if (!resultados) {
        resultados = "<p>Sem resultados para a pesquisa</p>"
    }
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}
