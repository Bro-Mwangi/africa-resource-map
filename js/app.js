// Main Application
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
        coords: [-29.6, 25.5],
        resources: ['Gold', 'Diamonds', 'Platinum', 'Iron Ore'],
        investment: 'High',
        population: '60M',
        gdp: '$420B',
        stability: 'Moderate',
        description: 'World\'s largest producer of platinum and gold. Advanced mining infrastructure.'
    },
    {
        id: 2,
        country: 'Democratic Republic of Congo',
        coords: [-4.0, 21.8],
        resources: ['Cobalt', 'Copper', 'Diamonds', 'Gold'],
        investment: 'Medium',
        population: '95M',
        gdp: '$84B',
        stability: 'Growing',
        description: 'Produces 70% of world\'s cobalt. Rich mineral reserves with growth potential.'
    },
    {
        id: 3,
        country: 'Nigeria',
        coords: [9.0, 8.6],
        resources: ['Oil', 'Tin', 'Bauxite', 'Natural Gas'],
        investment: 'High',
        population: '223M',
        gdp: '$480B',
        stability: 'Moderate',
        description: 'Africa\'s largest oil producer. Largest African economy with diverse minerals.'
    },
    {
        id: 4,
        country: 'Ghana',
        coords: [5.6, -0.2],
        resources: ['Gold', 'Bauxite', 'Manganese'],
        investment: 'High',
        population: '33M',
        gdp: '$75B',
        stability: 'Stable',
        description: 'Second-largest gold producer in Africa. Excellent business environment.'
    },
    {
        id: 5,
        country: 'Zambia',
        coords: [-13.1, 27.8],
        resources: ['Copper', 'Cobalt', 'Emerald'],
        investment: 'High',
        population: '19M',
        gdp: '$30B',
        stability: 'Growing',
        description: 'Second-largest copper producer. Major cobalt production hub.'
    },
    {
        id: 6,
        country: 'Ethiopia',
        coords: [9.1, 40.4],
        resources: ['Gold', 'Potash', 'Tantalum', 'Salt'],
        investment: 'Medium',
        population: '120M',
        gdp: '$250B',
        stability: 'Developing',
        description: 'Largest gold reserves on continent. Rapidly developing mining sector.'
    },
    {
        id: 7,
        country: 'Morocco',
        coords: [31.9, -6.9],
        resources: ['Phosphate', 'Iron Ore', 'Cobalt'],
        investment: 'High',
        population: '37M',
        gdp: '$145B',
        stability: 'Stable',
        description: 'World\'s largest phosphate reserves. Modern mining operations.'
    }
];

// Add markers to map
mineral Deposits.forEach(deposit => {
    const marker = L.circleMarker([deposit.coords[0], deposit.coords[1]], {
        radius: 10,
        fillColor: '#667eea',
        color: '#667eea',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.7
    }).addTo(map);

    marker.on('click', function() {
        selectedLocation = deposit;
        displayResourceInfo(deposit);
        map.flyTo([deposit.coords[0], deposit.coords[1]], 6);
    });

    marker.bindPopup(`<b>${deposit.country}</b><br>Click for details`);
});

function displayResourceInfo(deposit) {
    document.getElementById('statsText').innerHTML = `
        <strong>${deposit.country}</strong><br>
        📊 GDP: ${deposit.gdp}<br>
        👥 Population: ${deposit.population}<br>
        💼 Investment: ${deposit.investment}<br>
        🏛️ Stability: ${deposit.stability}<br>
        <em style="font-size: 0.85em; color: #666;">${deposit.description}</em>
    `;

    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = deposit.resources.map(r => 
        `<div class="resource-tag">${r}</div>`
    ).join('');
}

// Chat functionality
async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    const sendBtn = document.getElementById('sendBtn');

    if (message === '') return;

    // Display user message
    addChatMessage(message, 'user');
    input.value = '';
    sendBtn.disabled = true;

    // Add loading indicator
    addChatMessage('Thinking...', 'loading');

    // Get AI response
    const aiResponse = await qwenClient.callQwenAPI(message);
    
    // Remove loading message
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.removeChild(chatMessages.lastChild);
    
    // Add AI response
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

// Allow Enter key to send messages
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

// Display initial welcome
addChatMessage('👋 Welcome! Explore Africa\'s mineral wealth and investment opportunities.', 'ai');
