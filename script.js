function updateCandidateImage() {
    const selectedCandidate = document.getElementById('candidate').value;
    const candidateImages = document.getElementsByClassName('candidate-image');

    // Esconda todas as imagens
    for (const img of candidateImages) {
        img.style.display = 'none';
    }

    // Exiba a imagem correspondente ao candidato selecionado
    const candidateImage = document.querySelector(`[data-candidate="${selectedCandidate}"]`);
    if (candidateImage) {
        candidateImage.style.display = 'block';
    }
}


function submitVote() {
    playVotarSound();

    const selectedCandidate = document.getElementById('candidate').value;

    // Obtenha os resultados do armazenamento local
    const storedResults = JSON.parse(localStorage.getItem('votingResults')) || {};

    // Atualize os resultados com o voto atual
    storedResults[selectedCandidate] = (storedResults[selectedCandidate] || 0) + 1;

    // Armazene os resultados atualizados no armazenamento local
    localStorage.setItem('votingResults', JSON.stringify(storedResults));

    // Atualize os resultados exibidos (opcional)
    updateResultsDisplay();

    // Por enquanto, apenas exibiremos um alerta.
    alert(`Você votou em: ${selectedCandidate}`);
}

function updateResultsDisplay() {
    // Adicione lógica para exibir os resultados na página de resultados
}


// Função para renderizar o gráfico
// Atualize a função renderChart no script.js

function renderChart(votesData, candidateImages) {
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(votes),
            datasets: [{
                label: 'Votos',
                data: votesData,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            tooltips: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const index = context.dataIndex || 0;
                        const votesCount = votesData[index];
                        const candidate = Object.keys(votes)[index];
                        const imageSrc = candidateImages[candidate];
                        return `${label}: ${votesCount} votos <img src="${imageSrc}" class="tooltip-image" />`;
                    }
                }
            }
        }
    });
}

// Adicione estas linhas no script.js

// Carregar as imagens dos candidatos nos resultados
// Substitua as funções relacionadas às imagens dos candidatos no script.js pelo seguinte código

// Função para carregar as imagens dos candidatos nas opções de voto

// Função para exibir a imagem centralizada ao escolher um candidato na lista
function showSelectedCandidateImage() {
    const selectElement = document.getElementById('candidate');
    const selectedCandidate = selectElement.value;
    const selectedCandidateImage = document.getElementById('selectedCandidateImage');

    if (selectedCandidateImage) {
        // Remove a imagem anterior se existir
        selectedCandidateImage.remove();
    }

    const imageSrc = `path/to/${selectedCandidate}.jpg`;  // Atualize o caminho conforme necessário
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = `Candidato ${selectedCandidate.charAt(selectedCandidate.length - 1)}`;
    imageElement.className = 'selected-candidate-image';

    const appElement = document.getElementById('app');
    appElement.appendChild(imageElement);
}

function showResults() {
    const passwordInput = document.getElementById('password').value;

    // Adicione aqui lógica para verificar a senha no lado do cliente
    // Por exemplo, você pode comparar com uma senha fixa ou validar com um backend

    // Simulação: use "senha123" como senha
    if (passwordInput === 'senha123') {
        // Se a senha estiver correta, redirecione para a página de resultados
        window.location.href = 'resultados.html';
    } else {
        // Senha incorreta
        alert('Senha incorreta. Tente novamente.');
    }
}
function playVotarSound() {
    const votarSound = document.getElementById('votarSound');
    votarSound.play();
}

function submitVote() {
    playVotarSound();

    const selectedCandidate = document.getElementById('candidate').value;

    // Obtenha os resultados do armazenamento local
    const storedResults = JSON.parse(localStorage.getItem('votingResults')) || {};

    // Atualize os resultados com o voto atual
    storedResults[selectedCandidate] = (storedResults[selectedCandidate] || 0) + 1;

    // Armazene os resultados atualizados no armazenamento local
    localStorage.setItem('votingResults', JSON.stringify(storedResults));

    // Atualize os resultados exibidos (opcional)
    updateResultsDisplay();

    // Por enquanto, apenas exibiremos um alerta.
    alert(`Você votou em: ${selectedCandidate}`);
}

function updateResultsDisplay() {
    // Adicione lógica para exibir os resultados na página de resultados
}
// Chame as funções ao carregar a página
function submitVote() {
    // Obtém o valor selecionado no dropdown
    const selectedCandidate = document.getElementById('candidate').value;

    // Verifica se um candidato foi escolhido
    if (selectedCandidate === "") {
        alert("Por favor, escolha um candidato antes de votar.");
        return;
    }

    // Emite o som ao clicar
    document.getElementById('votarSound').play();

    // Contabiliza o voto para o candidato escolhido
    const votingResults = JSON.parse(localStorage.getItem('votingResults')) || {};
    votingResults[selectedCandidate] = (votingResults[selectedCandidate] || 0) + 1;
    localStorage.setItem('votingResults', JSON.stringify(votingResults));

    // Atualiza a tabela de resultados na outra página (você precisa implementar a outra página)
    // updateResultsTable(); 
}
loadCandidateImagesForOptions();
showSelectedCandidateImage();
