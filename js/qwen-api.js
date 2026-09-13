// Qwen AI API Configuration
class QwenAIClient {
    constructor(apiKey = null) {
        // API Configuration - Update with your Qwen API key
        this.apiKey = apiKey || localStorage.getItem('qwenApiKey') || null;
        this.apiEndpoint = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation';
        this.model = 'qwen-turbo';
        this.isConnected = false;
    }

    // Set API key (can be called from console or settings)
    setApiKey(key) {
        this.apiKey = key;
        localStorage.setItem('qwenApiKey', key);
        this.updateConnectionStatus();
    }

    // Check if API is connected
    checkConnection() {
        this.isConnected = this.apiKey !== null && this.apiKey !== '';
        this.updateConnectionStatus();
        return this.isConnected;
    }

    // Update UI status
    updateConnectionStatus() {
        const statusDiv = document.getElementById('apiStatus');
        if (this.isConnected) {
            statusDiv.textContent = '🟢 Qwen AI Connected';
            statusDiv.className = 'api-status connected';
        } else {
            statusDiv.textContent = '🔴 Demo Mode (No API Key)';
            statusDiv.className = 'api-status disconnected';
        }
    }

    // Call Qwen API
    async callQwenAPI(userMessage) {
        if (!this.apiKey) {
            return this.generateDemoResponse(userMessage);
        }

        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: this.model,
                    input: {
                        messages: [
                            {
                                role: 'system',
                                content: 'You are an expert AI assistant specialized in African mineral resources, investments, and economic development. Provide concise, accurate information about African minerals, deposits, investment opportunities, and market trends.'
                            },
                            {
                                role: 'user',
                                content: userMessage
                            }
                        ]
                    },
                    parameters: {
                        temperature: 0.7,
                        top_p: 0.8,
                        max_tokens: 500
                    }
                })
            });

            if (!response.ok) {
                console.error('API Error:', response.statusText);
                return this.generateDemoResponse(userMessage);
            }

            const data = await response.json();
            return data.output.text || this.generateDemoResponse(userMessage);
        } catch (error) {
            console.error('Qwen API Error:', error);
            return this.generateDemoResponse(userMessage);
        }
    }

    // Fallback demo responses
    generateDemoResponse(userMessage) {
        const responses = {
            'gold': '🏆 Gold is abundantly found in South Africa, Ghana, and Ethiopia. South Africa has the deepest gold mines in the world with reserves of over 6,000 tonnes. Investment opportunities include mining operations, gold refining facilities, and jewelry manufacturing. Ghana is the world\'s second-largest gold producer in Africa with significant growth potential.',
            'copper': '🔨 Copper deposits are significant in Zambia and Democratic Republic of Congo (DRC). Zambia is the world\'s second-largest copper producer with over 2.8 million tonnes annually. Investment in smelting facilities and copper processing can add significant value. DRC also has vast untapped reserves.',
            'diamonds': '💎 South Africa and DRC are major diamond producers. South Africa produces high-quality diamonds, while DRC has large quantity deposits. Investment in diamond cutting, polishing, and jewelry manufacturing facilities offers high returns. The market is projected to grow 4-5% annually.',
            'cobalt': '⚡ Cobalt is critical for battery technology. DRC produces 70% of world\'s cobalt. Zambia is rapidly developing cobalt mining. Investment in cobalt refining and battery component manufacturing is highly lucrative given electric vehicle growth.',
            'investment': '💰 Africa offers diverse investment opportunities: mining operations, mineral processing (value-addition), infrastructure development, technology integration, and manufacturing. Each country has unique advantages. South Africa and Ghana have established frameworks; DRC and Zambia offer growth potential.',
            'default': '📊 I can help you learn about African mineral resources, investment opportunities, market trends, and country-specific data. Try asking about specific minerals (gold, copper, diamonds, cobalt) or countries for detailed insights!'
        };

        const lowerMessage = userMessage.toLowerCase();
        for (let key in responses) {
            if (lowerMessage.includes(key)) {
                return responses[key];
            }
        }
        return responses['default'];
    }
}

// Create global instance
const qwenClient = new QwenAIClient();
qwenClient.checkConnection();

// Instructions for users (log to console)
console.log('%c🤖 Qwen AI Integration Ready', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cTo enable real Qwen AI:', 'color: #333; font-weight: bold;');
console.log('%c1. Get API key from https://dashscope.aliyuncs.com/', 'color: #666;');
console.log('%c2. Run: qwenClient.setApiKey("your-api-key-here")', 'color: #666;');
console.log('%c3. Refresh the page', 'color: #666;');
