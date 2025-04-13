function selecioneMunicipio() {
    let estado = document.getElementById("estado").value;

    let municipioElement = document.getElementById("municipio");
    removeOptions(municipioElement);
    addOption(municipioElement, "-", "-");
    switch (estado) {
        case "bahia":
            addOption(municipioElement, "salvador", "Salvador");
            addOption(municipioElement, "feira_santana", "Feira de Santana");
            break;
        case "sao_paulo":
            addOption(municipioElement, "sao_paulo", "São Paulo");
            addOption(municipioElement, "adamantina", "Adamantina");
            break;
        case "rio_janeiro":
            addOption(municipioElement, "rio_janeiro", "Rio de Janeiro");
            addOption(municipioElement, "niteroi", "Niterói");
            break;
        case "tocantins":
            addOption(municipioElement, "palmas", "Palmas");
            addOption(municipioElement, "araguaina", "Araguaína");
            break;
        default:
            break;
    }
}

function removeOptions(selectElement) {
    for (let i = (selectElement.options.length - 1); i >= 0; i--) {
        selectElement.remove(i);
    }
}

function addOption(selectElement, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}
function verificarObrigatorios() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;

    // Verifica se os campos obrigatórios têm valores
    if (!nome || !cpf) {
        document.getElementById("btEnviar").disabled = true;
    } else {
        document.getElementById("btEnviar").disabled = false;
    }
}

function aoCarregar() {
    // Verifica os campos obrigatórios periodicamente
    setInterval(verificarObrigatorios, 1000);
}

function selecioneMunicipio() {
    let estado = document.getElementById("estado").value;

    let municipioElement = document.getElementById("municipio");
    removeOptions(municipioElement);
    addOption(municipioElement, "-", "-");

    switch (estado) {
        case "bahia":
            addOption(municipioElement, "salvador", "Salvador");
            addOption(municipioElement, "feira_santana", "Feira de Santana");
            break;
        case "sao_paulo":
            addOption(municipioElement, "sao_paulo", "São Paulo");
            addOption(municipioElement, "adamantina", "Adamantina");
            break;
        case "rio_janeiro":
            addOption(municipioElement, "rio_janeiro", "Rio de Janeiro");
            addOption(municipioElement, "niteroi", "Niterói");
            break;
        case "tocantins":
            addOption(municipioElement, "palmas", "Palmas");
            addOption(municipioElement, "araguaina", "Araguaína");
            break;
        default:
            break;
    }
}

function removeOptions(selectElement) {
    while (selectElement.options.length > 0) {
        selectElement.remove(0);
    }
}

function addOption(selectElement, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}


