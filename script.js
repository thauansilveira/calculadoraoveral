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

// Pesos para cada posição
const positionWeights = {
    // Atacante
    'atacante': {
        'Attack': 1.5,
        'Shot accuracy': 1.5,
        'Balance': 1.5,
        'Technique': 1.3,
        'Acceleration': 1.4,
        'Top speed': 1.4,
        'Dribble accuracy': 1.2,
        'Agility': 1.2,
        'Dribble speed': 1.1,
        'Shot technique': 1.0,
        'Short pass accuracy': 0.7,
        'Long pass accuracy': 0.7,
        'Response': 0.6,
        'Shot power': 0.6,
        'Stamina': 0.4,
        'Short pass speed': 0.4,
        'Long pass speed': 0.4,
        'Free kick accuracy': 0.3,
        'Mentality': 0.3,
        'Teamwork': 0.3,
        'Aggression': 0.3,
        'Swerve': 0.2,
        'Heading': 0.2,
        'Jump': 0.1,
        'Defense': 0
    },
    
    // Meia Defensivo
    'meiaDefensivo': {
        'Balance': 1.4,
        'Stamina': 1.2,
        'Defense': 1.2,
        'Response': 1.1,
        'Short pass accuracy': 0.9,
        'Long pass accuracy': 0.9,
        'Teamwork': 1.0,
        'Attack': 0.8,
        'Aggression': 0.8,
        'Acceleration': 0.8,
        'Mentality': 0.8,
        'Short pass speed': 0.7,
        'Long pass speed': 0.7,
        'Technique': 0.7,
        'Shot accuracy': 0.7,
        'Shot power': 0.6,
        'Heading': 0.6,
        'Top speed': 0.6,
        'Dribble accuracy': 0.5,
        'Jump': 0.5,
        'Agility': 0.4,
        'Shot technique': 0.4,
        'Dribble speed': 0.3,
        'Free kick accuracy': 0.2,
        'Swerve': 0.1
    },
    
    // Zagueiro
    'zagueiro': {
        'Balance': 1.6,
        'Jump': 1.6,
        'Defense': 1.5,
        'Heading': 1.2,
        'Acceleration': 1.1,
        'Top speed': 1.1,
        'Mentality': 1.1,
        'Stamina': 1.0,
        'Free kick accuracy': 1.0,
        'Response': 0.9,
        'Aggression': 0.8,
        'Teamwork': 0.7,
        'Short pass accuracy': 0.4,
        'Agility': 0.4,
        'Shot power': 0.5,
        'Long pass accuracy': 0.3,
        'Technique': 0.3,
        'Long pass speed': 0.3,
        'Shot accuracy': 0.3,
        'Shot technique': 0.3,
        'Dribble accuracy': 0.3,
        'Short pass speed': 0.3,
        'Dribble speed': 0.2,
        'Attack': 0.2,
        'Swerve': 0.1
    },
    
    'centroavante': {
        'Attack': 1.5,
        'Balance': 1.5,
        'Shot accuracy': 1.4,
        'Heading': 1.4,
        'Acceleration': 1.3,
        'Top speed': 1.2,
        'Shot technique': 1.1,
        'Shot power': 0.9,
        'Jump': 0.8,
        'Response': 0.7,
        'Agility': 0.5,
        'Technique': 0.6,
        'Dribble accuracy': 0.5,
        'Dribble speed': 0.4,
        'Short pass accuracy': 0.4,
        'Long pass accuracy': 0.2,
        'Stamina': 0.5,
        'Aggression': 0.4,
        'Mentality': 0.3,
        'Teamwork': 0.3,
        'Swerve': 0.1,
        'Free kick accuracy': 0.2,
        'Defense': 0,
        'Short pass speed': 0,
        'Long pass speed': 0
    },
    
    'meiaArmador': {
        'Technique': 1.5,
        'Dribble speed': 1.4,
        'Dribble accuracy': 1.2,
        'Short pass accuracy': 1.2,
        'Balance': 1.2,
        'Attack': 1.3,
        'Top speed': 1.2,
        'Acceleration': 1.2,
        'Long pass accuracy': 1.0,
        'Agility': 1.0,
        'Shot technique': 1.0,
        'Free kick accuracy': 1.0,
        'Shot power': 1.0,
        'Short pass speed': 0.8,
        'Long pass speed': 0.8,
        'Shot accuracy': 0.8,
        'Response': 0.7,
        'Stamina': 0.4,
        'Swerve': 0.4,
        'Teamwork': 0.4,
        'Mentality': 0.3,
        'Heading': 0.2,
        'Jump': 0.2,
        'Defense': 0,
        'Aggression': 0
    },
    
    'lateral': {
        'Stamina': 1.4,
        'Defense': 1.4,
        'Acceleration': 1.2,
        'Top speed': 1.1,
        'Balance': 1.1,
        'Response': 1.0,
        'Long pass accuracy': 1.0,
        'Free kick accuracy': 1.0,
        'Short pass accuracy': 0.8,
        'Agility': 0.7,
        'Shot accuracy': 0.7,
        'Long pass speed': 0.9,
        'Short pass speed': 0.6,
        'Dribble accuracy': 0.5,
        'Technique': 0.5,
        'Shot technique': 0.5,
        'Shot power': 0.5,
        'Dribble speed': 0.4,
        'Attack': 0.4,
        'Teamwork': 0.4,
        'Mentality': 0.4,
        'Aggression': 0.4,
        'Jump': 0.4,
        'Heading': 0.4,
        'Swerve': 0.2
    },
    
    'goleiro': {
        'GK Skills': 1.9,
        'Defense': 1.4,
        'Response': 1.1,
        'Jump': 0.9,
        'Agility': 0.9,
        'Balance': 1.0,
        'Short pass accuracy': 0.7,
        'Long pass accuracy': 0.7,
        'Shot power': 0.7,
        'Short pass speed': 0.7,
        'Long pass speed': 0.7,
        'Technique': 0.5,
        'Mentality': 0.4,
        'Stamina': 0.3,
        'Teamwork': 0.3,
        'Top speed': 0.2,
        'Acceleration': 0.2,
        'Heading': 0.2,
        'Attack': 0,
        'Dribble accuracy': 0,
        'Dribble speed': 0,
        'Shot accuracy': 0,
        'Shot technique': 0,
        'Free kick accuracy': 0,
        'Aggression': 0,
        'Swerve': 0
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

    overallValue.textContent = overall;
    resultDiv.classList.remove('hidden');

    if (position && positionNames[position]) {
        positionDisplay.textContent = `Posição: ${positionNames[position]}`;
    } else {
        positionDisplay.textContent = '';
    }

    // Scroll suave até o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Função para limpar todos os campos
function clearFields() {
    const form = document.getElementById('calculatorForm');
    form.reset();
    document.getElementById('result').classList.add('hidden');
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
});
