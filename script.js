// Mapeamento dos campos do formulário para os nomes dos atributos
const attributeMap = {
    attack: 'Attack',
    defense: 'Defense',
    gkSkills: 'GK Skills',
    technique: 'Technique',
    dribbleAccuracy: 'Dribble accuracy',
    dribbleSpeed: 'Dribble speed',
    shotAccuracy: 'Shot accuracy',
    shotTechnique: 'Shot technique',
    acceleration: 'Acceleration',
    agility: 'Agility',
    topSpeed: 'Top speed',
    shortPassAccuracy: 'Short pass accuracy',
    longPassAccuracy: 'Long pass accuracy',
    response: 'Response',
    shotPower: 'Shot power',
    balance: 'Balance',
    stamina: 'Stamina',
    shortPassSpeed: 'Short pass speed',
    longPassSpeed: 'Long pass speed',
    freeKickAccuracy: 'Free kick accuracy',
    mentality: 'Mentality',
    teamwork: 'Teamwork',
    aggression: 'Aggression',
    swerve: 'Swerve',
    heading: 'Heading',
    jump: 'Jump'
};

// Mapeamento de nomes de posição para exibição
const positionNames = {
    'atacante': 'Atacante',
    'centroavante': 'Centroavante',
    'meiaArmador': 'Meia Armador',
    'meiaDefensivo': 'Meia Defensivo',
    'lateral': 'Lateral',
    'zagueiro': 'Zagueiro',
    'goleiro': 'Goleiro'
};

// Mapeamento de nomes de atributos em português
const attributeNamesPT = {
    'Attack': 'Ataque',
    'Defense': 'Defesa',
    'GK Skills': 'Habilidade GK',
    'Technique': 'Técnica',
    'Dribble accuracy': 'Precisão de Drible',
    'Dribble speed': 'Velocidade de Drible',
    'Shot accuracy': 'Precisão de Chute',
    'Shot technique': 'Técnica de Chute',
    'Acceleration': 'Aceleração',
    'Agility': 'Agilidade',
    'Top speed': 'Velocidade Máxima',
    'Short pass accuracy': 'Precisão de Passe Curto',
    'Long pass accuracy': 'Precisão de Passe Longo',
    'Response': 'Reação',
    'Shot power': 'Força do Chute',
    'Balance': 'Equilíbrio',
    'Stamina': 'Resistência',
    'Short pass speed': 'Velocidade de Passe Curto',
    'Long pass speed': 'Velocidade de Passe Longo',
    'Free kick accuracy': 'Precisão de Cobrança de Falta',
    'Mentality': 'Mentalidade',
    'Teamwork': 'Trabalho em Equipe',
    'Aggression': 'Agressividade',
    'Swerve': 'Efeito',
    'Heading': 'Cabeceio',
    'Jump': 'Salto'
};

// Mapeamento de habilidades especiais em português
const specialAbilityNamesPT = {
    'dribbling': 'Drible',
    'tacticalDribble': 'Drible Tático (proteção de bola, giro, condução inteligente)',
    'positioning': 'Posicionamento Ofensivo',
    'reaction': 'Reação',
    'playmaking': 'Criação de Jogadas',
    'passing': 'Passe Preciso',
    'scoring': 'Finalização',
    'oneOnOneScoring': 'Finalização no 1 contra 1',
    'postPlayer': 'Pivô / Jogador de Costas',
    'lines': 'Manutenção de Linha Tática',
    'middleShooting': 'Chute de Média Distância',
    'side': 'Atuação pelas Laterais',
    'centre': 'Atuação pelo Centro',
    'penalties': 'Cobrança de Pênaltis',
    'oneTouchPass': 'Passe de Primeira',
    'outside': 'Chute com a Parte Externa do Pé',
    'marking': 'Marcação',
    'slidingTackle': 'Carrinho',
    'covering': 'Cobertura Defensiva',
    'dLineControl': 'Controle da Linha Defensiva',
    'penaltyStopper': 'Defensor de Pênaltis (Goleiro)',
    'oneOnOneStopper': 'Defensor no 1 contra 1 (Goleiro)',
    'longThrow': 'Arremesso Longo (Lateral)'
};

// Pesos para cada posição
const positionWeights = {
    // Atacante
    'atacante': {
        'Attack': 1.7,
        'Shot accuracy': 1.5,
        'Balance': 1.7,
        'Technique': 1.3,
        'Acceleration': 1.5,
        'Top speed': 1.5,
        'Dribble accuracy': 1.1,
        'Agility': 1.0,
        'Dribble speed': 1.0,
        'Shot technique': 0.9,
        'Short pass accuracy': 0.3,
        'Long pass accuracy': 0.3,
        'Response': 0.2,
        'Shot power': 0.3,
        'Stamina': 0.2,
        'Short pass speed': 0.2,
        'Long pass speed': 0.2,
        'Free kick accuracy': 0.3,
        'Mentality': 0.1,
        'Teamwork': 0.1,
        'Aggression': 0.3,
        'Swerve': 0.3,
        'Heading': 0.3,
        'Jump': 0.3,
        'Defense': 0.1
    },
    
    // Meia Defensivo
    'meiaDefensivo': {
        'Balance': 1.8,
        'Defense': 1.8,
        'Attack': 1.3,
        'Stamina': 1.1,
        'Response': 1.1,
        'Teamwork': 1.0,
        'Agility': 0.7,
        'Short pass accuracy': 0.8,
        'Long pass accuracy': 0.3,
        'Dribble speed': 0.6,
        'Acceleration': 0.9,
        'Top speed': 0.8,
        'Aggression': 0.5,
        'Mentality': 0.7,
        'Short pass speed': 0.6,
        'Long pass speed': 0.3,
        'Technique': 0.6,
        'Shot accuracy': 0.6,
        'Shot power': 0.3,
        'Heading': 0.3,
        'Dribble accuracy': 0.3,
        'Jump': 0.3,
        'Shot technique': 0.3,
        'Free kick accuracy': 0.3,
        'Swerve': 0.3
    },
    
    // Zagueiro
    'zagueiro': {
        'Balance': 2.2,
        'Defense': 2.2,
        'Jump': 1.3,
        'Heading': 1.4,
        'Acceleration': 1.5,
        'Top speed': 1.1,
        'Mentality': 1.0,
        'Stamina': 1.4,
        'Free kick accuracy': 0.6,
        'Response': 1.0,
        'Aggression': 0.5,
        'Teamwork': 0.7,
        'Shot power': 0.2,
        'Short pass accuracy': 0.2,
        'Agility': 0.2,
        'Long pass accuracy': 0.3,
        'Technique': 0.1,
        'Long pass speed': 0.2,
        'Shot accuracy': 0.1,
        'Shot technique': 0.1,
        'Dribble accuracy': 0.1,
        'Short pass speed': 0.1,
        'Dribble speed': 0.1,
        'Attack': 0.1,
        'Swerve': 0.1
    },
    
    'centroavante': {
        'Attack': 1.8,
        'Balance': 2.0,
        'Shot accuracy': 1.6,
        'Heading': 1.4,
        'Acceleration': 1.4,
        'Top speed': 1.3,
        'Shot technique': 1.1,
        'Shot power': 1.0,
        'Jump': 1.0,
        'Response': 0.3,
        'Aggression': 0.3,
        'Technique': 0.3,
        'Agility': 0.3,
        'Dribble accuracy': 0.3,
        'Stamina': 0.3,
        'Dribble speed': 0.3,
        'Short pass accuracy': 0.3,
        'Long pass accuracy': 0.3,
        'Mentality': 0.3,
        'Teamwork': 0.3,
        'Free kick accuracy': 0.3,
        'Swerve': 0.3,
        'Short pass speed': 0.3,
        'Long pass speed': 0.3,
        'Defense': 0.3
    },
    
    'meiaArmador': {
        'Technique': 1.0,
        'Dribble speed': 1.0,
        'Attack': 0.8,
        'Dribble accuracy': 1.1,
        'Short pass accuracy': 0.8,
        'Balance': 1.2,
        'Top speed': 1.0,
        'Acceleration': 1.0,
        'Long pass accuracy': 0.5,
        'Agility': 1.2,
        'Shot technique': 1.0,
        'Free kick accuracy': 0.8,
        'Shot power': 0.7,
        'Short pass speed': 0.7,
        'Long pass speed': 0.5,
        'Shot accuracy': 1.2,
        'Response': 1.0,
        'Stamina': 0.2,
        'Swerve': 0.2,
        'Teamwork': 0.2,
        'Mentality': 0.2,
        'Heading': 0.1,
        'Jump': 0.1,
        'Defense': 0.3,
        'Aggression': 0.2
    },
    
    'lateral': {
        'Stamina': 1.8,
        'Top speed': 1.5,
        'Balance': 1.4,
        'Defense': 1.4,
        'Attack': 1.3,
        'Acceleration': 1.3,
        'Short pass accuracy': 1.0,
        'Shot accuracy': 1.0,
        'Long pass accuracy': 1.1,
        'Long pass speed': 1.1,
        'Agility': 0.9,
        'Response': 0.4,
        'Free kick accuracy': 0.4,
        'Short pass speed': 0.3,
        'Dribble accuracy': 0.3,
        'Technique': 0.1,
        'Shot technique': 0.1,
        'Shot power': 0.2,
        'Dribble speed': 0.2,
        'Teamwork': 0.2,
        'Mentality': 0.2,
        'Aggression': 0.2,
        'Jump': 0.2,
        'Heading': 0.2,
        'Swerve': 0.1
    },
    
    'goleiro': {
        'GK Skills': 2,
        'Defense': 2,
        'Response': 1.3,
        'Jump': 1.4,
        'Balance': 1.2,
        'Agility': 0.8,
        'Shot technique': 0.1,
        'Free kick accuracy': 0.5,
        'Swerve': 0.2,
        'Short pass accuracy': 0.2,
        'Long pass accuracy': 0.2,
        'Shot power': 0.1,
        'Short pass speed': 0.1,
        'Long pass speed': 0.1,
        'Technique': 0.1,
        'Mentality': 0.2,
        'Stamina': 0.2,
        'Teamwork': 0.1,
        'Top speed': 0,
        'Acceleration': 0,
        'Heading': 0,
        'Attack': 0,
        'Dribble accuracy': 0.1,
        'Dribble speed': 0.1,
        'Shot accuracy': 0.1,
        'Aggression': 0.2
    }
};

// Função para calcular o overall
function calculateOverall() {
    const position = document.getElementById('position').value;
    
    if (!position) {
        alert('Por favor, selecione uma posição!');
        return null;
    }
    
    const weights = positionWeights[position];
    if (!weights) {
        alert('Posição não encontrada!');
        return null;
    }
    
    let score = 0;

    // Percorre todos os atributos e calcula a soma ponderada conforme a fórmula
    for (const [fieldId, attributeName] of Object.entries(attributeMap)) {
        const input = document.getElementById(fieldId);
        const value = parseFloat(input.value) || 0;
        const weight = weights[attributeName] || 0;

        // Valida se o valor está no range válido (50-99)
        if (input.value && (value < 50 || value > 99)) {
            alert(`O valor de ${attributeName} deve estar entre 50 e 99!`);
            return null;
        }

        // Adiciona ao score: valor * peso (conforme fórmula fornecida)
        score += value * weight;
    }

    // Converte Score em Overall
    // Goleiro usa divisor 9.8, outras posições usam 15.4
    const divisor = position === 'goleiro' ? 9.8 : 15.4;
    const overall = score / divisor;
    
    // Arredonda o resultado
    return Math.round(overall);
}

// Função para exibir o resultado
function displayResult(overall, position) {
    const resultDiv = document.getElementById('result');
    const overallValue = document.getElementById('overallValue');
    const positionDisplay = document.getElementById('positionDisplay');
    const attributesList = document.getElementById('attributesList');
    const specialAbilitiesList = document.getElementById('specialAbilitiesList');

    overallValue.textContent = overall;
    resultDiv.classList.remove('hidden');

    if (position && positionNames[position]) {
        positionDisplay.textContent = `Posição: ${positionNames[position]}`;
    } else {
        positionDisplay.textContent = '';
    }

    // Coletar e exibir todos os atributos
    let attributesHTML = '<div class="attributes-grid-display">';
    for (const [fieldId, attributeName] of Object.entries(attributeMap)) {
        const input = document.getElementById(fieldId);
        if (input) {
            const value = input.value || '0';
            const ptName = attributeNamesPT[attributeName] || attributeName;
            attributesHTML += `
                <div class="attribute-item">
                    <span class="attribute-name">${ptName}:</span>
                    <span class="attribute-value">${value}</span>
                </div>
            `;
        }
    }
    attributesHTML += '</div>';
    attributesList.innerHTML = attributesHTML;

    // Coletar e exibir habilidades especiais marcadas
    const activeStars = document.querySelectorAll('.star-checkbox.active');
    if (activeStars.length > 0) {
        let specialAbilitiesHTML = '<div class="special-abilities-grid">';
        activeStars.forEach(star => {
            const skillName = star.getAttribute('data-skill');
            const ptName = specialAbilityNamesPT[skillName] || skillName;
            specialAbilitiesHTML += `
                <div class="special-ability-item">
                    <span class="star-icon">⭐</span>
                    <span class="special-ability-name">${ptName}</span>
                </div>
            `;
        });
        specialAbilitiesHTML += '</div>';
        specialAbilitiesList.innerHTML = specialAbilitiesHTML;
    } else {
        specialAbilitiesList.innerHTML = '<p class="no-special-abilities">Nenhuma habilidade especial selecionada</p>';
    }

    // Scroll suave até o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Função para limpar todos os campos
function clearFields() {
    const form = document.getElementById('calculatorForm');
    form.reset();
    document.getElementById('result').classList.add('hidden');
    // Reseta todas as estrelas
    const starCheckboxes = document.querySelectorAll('.star-checkbox');
    starCheckboxes.forEach(star => {
        star.classList.remove('active');
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');

    calculateBtn.addEventListener('click', function() {
        const overall = calculateOverall();
        if (overall !== null) {
            const position = document.getElementById('position').value;
            displayResult(overall, position);
        }
    });

    clearBtn.addEventListener('click', clearFields);

    // Permite calcular pressionando Enter e bloqueia caracteres não numéricos
    const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
    inputs.forEach((input, index) => {
        // Bloqueia caracteres não numéricos
        input.addEventListener('keypress', function(e) {
            // Permite: números (0-9), Enter, Backspace, Delete, Tab, Escape, setas
            const allowedKeys = ['Enter', 'Backspace', 'Delete', 'Tab', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
            const isNumber = /[0-9]/.test(e.key);
            
            if (!isNumber && !allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                return false;
            }
            
            // Enter avança para o próximo campo ou calcula se for o último
            if (e.key === 'Enter') {
                e.preventDefault();
                const nextIndex = index + 1;
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                    inputs[nextIndex].select();
                } else {
                    // Se for o último campo, calcula
                    calculateBtn.click();
                }
            }
        });
        
        // Auto-avança quando digitar 2 números
        input.addEventListener('input', function(e) {
            const value = e.target.value;
            // Se tiver 2 dígitos e o valor for válido (50-99), avança
            if (value.length === 2 && parseInt(value) >= 50 && parseInt(value) <= 99) {
                const nextIndex = index + 1;
                if (nextIndex < inputs.length) {
                    setTimeout(() => {
                        inputs[nextIndex].focus();
                        inputs[nextIndex].select();
                    }, 50);
                }
            }
        });
        
        // Seleciona todo o texto ao focar no campo (facilita edição)
        input.addEventListener('focus', function(e) {
            e.target.select();
        });
        
        // Bloqueia colar texto não numérico
        input.addEventListener('paste', function(e) {
            e.preventDefault();
            const pastedText = (e.clipboardData || window.clipboardData).getData('text');
            const numericValue = pastedText.replace(/[^0-9]/g, '');
            if (numericValue) {
                input.value = numericValue;
                // Se colou 2 dígitos válidos, avança
                if (numericValue.length === 2 && parseInt(numericValue) >= 50 && parseInt(numericValue) <= 99) {
                    const nextIndex = index + 1;
                    if (nextIndex < inputs.length) {
                        setTimeout(() => {
                            inputs[nextIndex].focus();
                            inputs[nextIndex].select();
                        }, 50);
                    }
                }
            }
        });
    });
    
    // Sistema de estrelas - uma estrela por habilidade, máximo 5 habilidades
    const starCheckboxes = document.querySelectorAll('.star-checkbox');
    let selectedStars = 0;
    const maxStars = 5;
    
    // Conta quantas estrelas estão ativas
    function countActiveStars() {
        return document.querySelectorAll('.star-checkbox.active').length;
    }
    
    // Clique nas estrelas
    starCheckboxes.forEach((star) => {
        star.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const currentCount = countActiveStars();
            
            if (isActive) {
                // Desmarca a estrela
                this.classList.remove('active');
            } else {
                // Tenta marcar a estrela
                if (currentCount < maxStars) {
                    this.classList.add('active');
                } else {
                    alert(`Você pode marcar no máximo ${maxStars} habilidades com estrela!`);
                }
            }
        });
    });
});
