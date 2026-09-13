// Enhanced Application with Advanced UI
let selectedLocation = null;

// Initialize map
const map = L.map('map').setView([0, 20], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Comprehensive mineral deposits data
const mineralDeposits = [
    {
        id: 1,
        country: 'South Africa',
        region: 'Witwatersrand Basin',
        coords: [-29.6, 25.5],
        resources: ['Gold', 'Diamonds', 'Platinum', 'Iron Ore'],
        investment: 'High',
        population: '60M',
        gdp: '$420B',
        stability: 'Moderate',
        description: 'World\'s largest producer of platinum and gold.'
    },
    {
        id: 2,
        country: 'Democratic Republic of Congo',
        region: 'Katanga Province',
        coords: [-4.0, 21.8],
        resources: ['Cobalt', 'Copper', 'Diamonds', 'Gold'],
        investment: 'Medium',
        population: '95M',
        gdp: '$84B',
        stability: 'Growing',
        description: 'Produces 70% of world\'s cobalt. Rich reserves.'
    },
    {
        id: 3,
        country: 'Nigeria',
        region: 'Niger Delta',
        coords: [9.0, 8.6],
        resources: ['Oil', 'Tin', 'Bauxite', 'Natural Gas'],
        investment: 'High',
        population: '223M',
        gdp: '$480B',
        stability: 'Moderate',
        description: 'Africa\'s largest oil producer.'
    },
    {
        id: 4,
        country: 'Ghana',
        region: 'Ashanti Region',
        coords: [5.6, -0.2],
        resources: ['Gold', 'Bauxite', 'Manganese'],
        investment: 'High',
        population: '33M',
        gdp: '$75B',
        stability: 'Stable',
        description: 'Second-largest gold producer in Africa.'
    },
    {
        id: 5,
        country: 'Zambia',
        region: 'Copperbelt',
        coords: [-13.1, 27.8],
        resources: ['Copper', 'Cobalt', 'Emerald'],
        investment: 'High',
        population: '19M',
        gdp: '$30B',
        stability: 'Growing',
        description: 'Second-largest copper producer.'
    },
    {
        id: 6,
        country: 'Ethiopia',
        region: 'Oromia Region',
        coords: [9.1, 40.4],
        resources: ['Gold', 'Potash', 'Tantalum', 'Salt'],
        investment: 'Medium',
        population: '120M',
        gdp: '$250B',
        stability: 'Developing',
        description: 'Largest gold reserves on continent.'
    },
    {
        id: 7,
        country: 'Morocco',
        region: 'Khouribga',
        coords: [31.9, -6.9],
        resources: ['Phosphate', 'Iron Ore', 'Cobalt'],
        investment: 'High',
        population: '37M',
        gdp: '$145B',
        stability: 'Stable',
        description: 'World\'s largest phosphate reserves.'
    },
    {
        id: 8,
        country: 'Tanzania',
        region: 'Mwanza & Geita',
        coords: [-6.3, 34.4],
        resources: ['Gold', 'Tanzanite', 'Gemstones'],
        investment: 'High',
        population: '65M',
        gdp: '$180B',
        stability: 'Stable',
        description: 'Fourth-largest gold producer in Africa.'
    },
    {
        id: 9,
        country: 'Kenya',
        region: 'Rift Valley',
        coords: [-1.3, 36.8],
        resources: ['Soda Ash', 'Titanium', 'Gold'],
        investment: 'Medium',
        population: '54M',
        gdp: '$120B',
        stability: 'Moderate',
        description: 'World\'s largest soda ash deposits.'
    }
];

// Add enhanced markers to map
mineralDeposits.forEach(deposit => {
    const investmentColor = deposit.investment === 'High' ? '#28a745' : deposit.investment === 'Medium' ? '#ffc107' : '#dc3545';
    
    const marker = L.circleMarker([deposit.coords[0], deposit.coords[1]], {
        radius: 12,
        fillColor: investmentColor,
        color: investmentColor,
        weight: 3,
        opacity: 0.9,
        fillOpacity: 0.8
    }).addTo(map);

    marker.on('click', function() {
        selectedLocation = deposit;
        displayResourceInfo(deposit);
        map.flyTo([deposit.coords[0], deposit.coords[1]], 6);
    });

    const popupContent = `
        <div style="font-weight: bold; color: #667eea;">${deposit.country}</div>
        <div style="font-size: 0.9em; margin-top: 5px;">${deposit.region}</div>
        <div style="font-size: 0.85em; color: #666; margin-top: 3px;">${deposit.resources.join(', ')}</div>
    `;
    
    marker.bindPopup(popupContent);
});

function displayResourceInfo(deposit) {
    document.getElementById('statsText').innerHTML = `
        <strong style="color: #667eea; font-size: 1.1em;">${deposit.country}</strong>
        <div style="color: #666; margin-top: 5px; font-size: 0.95em;">${deposit.description}</div>
    `;

    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = `
        <div class="stat-item">
            <div class="stat-label">GDP</div>
            <div class="stat-value">${deposit.gdp}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Population</div>
            <div class="stat-value">${deposit.population}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Investment</div>
            <div class="stat-value">${deposit.investment}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Stability</div>
            <div class="stat-value">${deposit.stability}</div>
        </div>
    `;

    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = deposit.resources.map(r => 
        `<div class="resource-tag">⛏️ ${r}</div>`
    ).join('');
}

// Chat functionality
async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    const sendBtn = document.getElementById('sendBtn');

    if (message === '') return;

    addChatMessage(message, 'user');
    input.value = '';
    sendBtn.disabled = true;

    addChatMessage('🤔 Thinking...', 'loading');

    const aiResponse = await qwenClient.callQwenAPI(message);
    
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.removeChild(chatMessages.lastChild);
    
    addChatMessage(aiResponse, 'ai');
    sendBtn.disabled = false;
}

function addChatMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Navigation
function showSection(section) {
    if (section === 'map') {
        window.location.href = 'index.html';
    } else if (section === 'data') {
        window.location.href = 'investment-opportunities.html';
    } else if (section === 'about') {
        alert('🌍 Africa Resource Map\n\nInteractive platform for exploring African mineral resources and investment opportunities.\n\nVersion 1.0');
    }
}

// Export data
function downloadData() {
    const dataStr = JSON.stringify(mineralDeposits, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'africa-mineral-data.json';
    link.click();
}

// Allow Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

// Initial message
addChatMessage('👋 Welcome! Click on map locations to explore resources and opportunities.', 'ai');
