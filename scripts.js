// Dados de exemplo, você pode substituir por dados reais
const ramais = [
    { ramal: '8221', descricao: 'Administração' },
    { ramal: '8222', descricao: 'Alessandra' },
    { ramal: '1252', descricao: 'Coreme' },
    { ramal: '8648', descricao: 'Almoxarifado Central' },
    { ramal: '8566', descricao: 'Almoxarifado (Cesta)' },
    { ramal: '8616', descricao: 'Anatomia Patológica' },
    { ramal: '8776', descricao: 'Ala Azul - 1' },
    { ramal: '8781', descricao: 'Ala Azul - 2' },
    { ramal: '8225', descricao: 'Ala Amarela - 1' },
    { ramal: '8762', descricao: 'Ala Amarela - 2' },
    { ramal: '8765', descricao: 'Ala Laranja - 1' },
    { ramal: '8793', descricao: 'Ala Laranja - 2' },
    { ramal: '103', descricao: 'Recursos Humanos' },
    { ramal: '104', descricao: 'Financeiro' },
    { ramal: '105', descricao: 'TI' },
    { ramal: '101', descricao: 'Departamento de Vendas' },
    { ramal: '102', descricao: 'Suporte Técnico' },
    { ramal: '103', descricao: 'Recursos Humanos' },
    { ramal: '104', descricao: 'Financeiro' },
    { ramal: '105', descricao: 'TI' },
    { ramal: '101', descricao: 'Departamento de Vendas' },
    { ramal: '102', descricao: 'Suporte Técnico' },
    { ramal: '103', descricao: 'Recursos Humanos' },
    { ramal: '104', descricao: 'Financeiro' },
    { ramal: '105', descricao: 'TI' },
    { ramal: '101', descricao: 'Departamento de Vendas' },
    { ramal: '102', descricao: 'Suporte Técnico' },
    { ramal: '103', descricao: 'Recursos Humanos' },
    { ramal: '104', descricao: 'Financeiro' },
    { ramal: '105', descricao: 'TI' },
    { ramal: '101', descricao: 'Departamento de Vendas' },
    { ramal: '102', descricao: 'Suporte Técnico' },
    { ramal: '103', descricao: 'Recursos Humanos' },
    { ramal: '104', descricao: 'Financeiro' },
    { ramal: '105', descricao: 'TI' },
    { ramal: '101', descricao: 'Departamento de Vendas' },
    { ramal: '102', descricao: 'Suporte Técnico' },
    { ramal: '103', descricao: 'Recursos Humanos' },
    { ramal: '104', descricao: 'Financeiro' },
    { ramal: '105', descricao: 'TI' },
];

// Função para carregar ramais na tabela
function loadRamais() {
    const tableBody = document.getElementById('ramalTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Limpar tabela antes de preencher

    ramais.forEach(ramal => {
        const row = document.createElement('tr');
        const cellRamal = document.createElement('td');
        cellRamal.textContent = ramal.ramal;
        const cellDescricao = document.createElement('td');
        cellDescricao.textContent = ramal.descricao;
        row.appendChild(cellRamal);
        row.appendChild(cellDescricao);
        tableBody.appendChild(row);
    });
}

// Função para filtrar os ramais com base na pesquisa
function filterRamais() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredRamais = ramais.filter(ramal =>
        ramal.ramal.toLowerCase().includes(searchInput) ||
        ramal.descricao.toLowerCase().includes(searchInput)
    );
    displayFilteredRamais(filteredRamais);
}

// Função para exibir os ramais filtrados
function displayFilteredRamais(ramais) {
    const tableBody = document.getElementById('ramalTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Limpar tabela antes de preencher

    ramais.forEach(ramal => {
        const row = document.createElement('tr');
        const cellRamal = document.createElement('td');
        cellRamal.textContent = ramal.ramal;
        const cellDescricao = document.createElement('td');
        cellDescricao.textContent = ramal.descricao;
        row.appendChild(cellRamal);
        row.appendChild(cellDescricao);
        tableBody.appendChild(row);
    });
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterRamais);

// Carregar ramais ao iniciar a página
loadRamais();
