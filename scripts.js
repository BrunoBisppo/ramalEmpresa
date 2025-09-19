// Dados de exemplo, você pode substituir por dados reais
const ramais = [
    { ramal: '8221', descricao: 'Administração' },
    { ramal: '8222', descricao: 'Alessandra' },
    { ramal: '1252', descricao: 'Adminstração Coreme' },
    { ramal: '8648', descricao: 'Almoxarifado Central' },
    { ramal: '8566', descricao: 'Almoxarifado (Cesta)' },
    { ramal: '8616', descricao: 'Anatomia Patológica' },
    { ramal: '8776', descricao: 'Ala Azul - 1' },
    { ramal: '8781', descricao: 'Ala Azul - 2' },
    { ramal: '8781', descricao: 'Ala Azul 1 - Serviço Social' },
    { ramal: '8781', descricao: 'Ala Azul 2 - Sala da Max' },
    { ramal: '8225', descricao: 'Ala Amarela - 1' },
    { ramal: '8762', descricao: 'Ala Amarela - 2' },
    { ramal: '8762', descricao: 'Ala Amarela 2 - Sala da Max ' },
    { ramal: '8765', descricao: 'Ala Laranja - 1' },
    { ramal: '8793', descricao: 'Ala Laranja - 2' },
    { ramal: '103', descricao: 'Ala Verde - 1' },
    { ramal: '104', descricao: 'Ala Verde - 2' },
    { ramal: '105', descricao: 'Arquiquetura (Kary)' },
    { ramal: '101', descricao: 'Assesoria de Impressa' },
    { ramal: '101', descricao: 'Banco de Sangue' },
    { ramal: '102', descricao: 'Caridio Recepção' },
    { ramal: '103', descricao: 'Cardio (Sala Holter)' },
    { ramal: '104', descricao: 'C.C.I.H' },
    { ramal: '105', descricao: 'Caixa' },
    { ramal: 'PAPI', descricao: 'Coordenadora do Ps - Camila' },
    { ramal: '105', descricao: 'Cartório' },
    { ramal: '101', descricao: 'Centro Cirurgico Enfermagem' },
    { ramal: '102', descricao: 'C.Cirurgico (R.P.A)' },
    { ramal: '103', descricao: 'C.Cirurgico (AG. Cirug Prescrição)' },
    { ramal: '104', descricao: 'C.Cirurgico (Farmácia)' },
    { ramal: '105', descricao: 'C.Cirurgico (O.P.M.E)' },
    { ramal: '101', descricao: 'C.Cirurgico (C. Material)' },
    { ramal: '105', descricao: 'C.Cirurgico Agenda (Suzana)' },
    { ramal: '102', descricao: 'Conforto Cirurgia Geral' },
    { ramal: '103', descricao: 'Conforto Res C.Geral' },
    { ramal: '104', descricao: 'Conforto Anestesia' },
    { ramal: '105', descricao: 'Centro Obstétrico Conforto' },
    { ramal: '105', descricao: 'Centro Obstétrico Enfermaria' },
    { ramal: '105', descricao: 'C.P.D / T.I' },
    { ramal: '105', descricao: 'C.P.D / T.I' },
    { ramal: '101', descricao: 'Compras Samuel Coordenador' },
    { ramal: '105', descricao: 'Compras' },
    { ramal: '105', descricao: 'Compras' },
    { ramal: '105', descricao: 'Contabilidade' },
    { ramal: '105', descricao: 'Educação Continuada' },
    { ramal: '105', descricao: 'Educação Continuada' },
    { ramal: '105', descricao: 'Endoscopia Convenio' },
    { ramal: '105', descricao: 'Endoscopia Sus' },
    { ramal: '105', descricao: 'Escrituraria Ala' },
    { ramal: '105', descricao: 'Escrituraria Ala' },
    { ramal: '105', descricao: 'Farmacia Coordenação Sandra' },
    { ramal: '105', descricao: 'Farmacia Dispensa' },
    { ramal: '105', descricao: 'Farmacia Recebimento' },
    { ramal: '105', descricao: 'Faturamento Sus coordenação Lucas' },
    { ramal: '105', descricao: 'Faturamento Sus' },
    { ramal: '105', descricao: 'Faturamento Sus' },
    { ramal: '105', descricao: 'Faturamento Convenio coordenação Josy' },
    { ramal: '105', descricao: 'Faturamento Convenio' },
    { ramal: '105', descricao: 'Faturamento Convenio' },
    { ramal: '105', descricao: 'Faturamento Auditoria' },
    { ramal: '105', descricao: 'Faturamento (Nataniel/Max)' },
    { ramal: '105', descricao: 'Financeiro (Ronaldo)' },
    { ramal: '105', descricao: 'Financeiro' },
    { ramal: '105', descricao: 'Financeiro Coordenação Vera' },
    { ramal: '105', descricao: 'Fisioterapia' },
    { ramal: '105', descricao: 'Gestão de Fluxo' },
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
