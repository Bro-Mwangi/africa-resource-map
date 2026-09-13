// Comprehensive African Mineral Deposits Database
const expansiveMineral Deposits = [
    // Southern Africa
    {
        id: 1,
        country: 'South Africa',
        region: 'Witwatersrand Basin',
        coords: [-29.6, 25.5],
        resources: ['Gold', 'Diamonds', 'Platinum', 'Iron Ore', 'Coal', 'Manganese'],
        investment: 'High',
        population: '60M',
        gdp: '$420B',
        stability: 'Moderate',
        reserves: 'Proven and significant',
        valueAddition: ['Jewelry Manufacturing', 'Platinum Processing', 'Steel Production'],
        description: 'World\'s largest producer of platinum and gold. Advanced mining infrastructure and established commodity markets.'
    },
    {
        id: 2,
        country: 'Botswana',
        region: 'Central Kalahari',
        coords: [-22.3, 24.6],
        resources: ['Diamonds', 'Copper', 'Nickel', 'Coal'],
        investment: 'High',
        population: '2.4M',
        gdp: '$20B',
        stability: 'Stable',
        reserves: 'Significant diamond reserves',
        valueAddition: ['Diamond Cutting', 'Jewelry', 'Mining Equipment'],
        description: 'Leading diamond producer with excellent governance and business environment.'
    },
    {
        id: 3,
        country: 'Zambia',
        region: 'Copperbelt',
        coords: [-13.1, 27.8],
        resources: ['Copper', 'Cobalt', 'Emerald', 'Gold'],
        investment: 'High',
        population: '19M',
        gdp: '$30B',
        stability: 'Growing',
        reserves: '2.8M tonnes copper annually',
        valueAddition: ['Copper Smelting', 'Cobalt Refining', 'Battery Components'],
        description: 'Second-largest copper producer and 70% of cobalt production. Critical for EV batteries.'
    },
    {
        id: 4,
        country: 'Zimbabwe',
        region: 'Great Dyke',
        coords: [-17.8, 30.9],
        resources: ['Platinum', 'Chromite', 'Gold', 'Nickel'],
        investment: 'Medium',
        population: '15M',
        gdp: '$28B',
        stability: 'Moderate',
        reserves: 'World\'s second-largest platinum reserves',
        valueAddition: ['Platinum Refining', 'Chromite Processing', 'Catalytic Converters'],
        description: 'Untapped potential with world\'s second-largest platinum reserves.'
    },

    // Central Africa
    {
        id: 5,
        country: 'Democratic Republic of Congo',
        region: 'Katanga Province',
        coords: [-4.0, 21.8],
        resources: ['Cobalt', 'Copper', 'Diamonds', 'Gold', 'Coltan', 'Tin'],
        investment: 'Medium',
        population: '95M',
        gdp: '$84B',
        stability: 'Growing',
        reserves: '70% of world cobalt, 50% of diamonds',
        valueAddition: ['Cobalt Refining', 'Diamond Cutting', 'Battery Manufacturing'],
        description: 'Produces 70% of world\'s cobalt and 50% of diamonds. Vast untapped reserves.'
    },
    {
        id: 6,
        country: 'Zambia (Copperbelt Region)',
        region: 'Copperbelt',
        coords: [-12.8, 28.5],
        resources: ['Copper', 'Cobalt', 'Emerald'],
        investment: 'High',
        population: '5M (regional)',
        gdp: 'Part of $30B national',
        stability: 'Growing',
        reserves: 'Abundant copper and cobalt',
        valueAddition: ['Smelting', 'Refining', 'Manufacturing'],
        description: 'Africa\'s largest copper producing region with integrated mining operations.'
    },

    // West Africa
    {
        id: 7,
        country: 'Ghana',
        region: 'Ashanti Region',
        coords: [5.6, -0.2],
        resources: ['Gold', 'Bauxite', 'Manganese', 'Diamond'],
        investment: 'High',
        population: '33M',
        gdp: '$75B',
        stability: 'Stable',
        reserves: 'Proven gold reserves',
        valueAddition: ['Gold Refining', 'Jewelry', 'Electronics Manufacturing'],
        description: 'Second-largest African gold producer with excellent governance.'
    },
    {
        id: 8,
        country: 'Nigeria',
        region: 'Niger Delta & Northwest',
        coords: [9.0, 8.6],
        resources: ['Oil', 'Tin', 'Bauxite', 'Natural Gas', 'Coal'],
        investment: 'High',
        population: '223M',
        gdp: '$480B',
        stability: 'Moderate',
        reserves: 'Africa\'s largest oil producer',
        valueAddition: ['Oil Refining', 'Petrochemicals', 'Aluminum Smelting'],
        description: 'Largest African economy and oil producer. Diverse mineral portfolio.'
    },
    {
        id: 9,
        country: 'Guinea',
        region: 'Kindia Region',
        coords: [9.5, -10.5],
        resources: ['Bauxite', 'Gold', 'Iron Ore', 'Diamond'],
        investment: 'Medium',
        population: '13.5M',
        gdp: '$18B',
        stability: 'Moderate',
        reserves: 'World\'s largest bauxite reserves',
        valueAddition: ['Aluminum Smelting', 'Gold Refining', 'Iron Processing'],
        description: 'World\'s largest bauxite reserves with significant untapped potential.'
    },
    {
        id: 10,
        country: 'Sierra Leone',
        region: 'Kono District',
        coords: [8.3, -11.2],
        resources: ['Diamond', 'Rutile', 'Iron Ore', 'Gold'],
        investment: 'Medium',
        population: '8.6M',
        gdp: '$5B',
        stability: 'Developing',
        reserves: 'High-quality diamonds',
        valueAddition: ['Diamond Certification', 'Jewelry', 'Mining Equipment'],
        description: 'Known for high-quality diamonds. Developing mining sector.'
    },

    // East Africa
    {
        id: 11,
        country: 'Ethiopia',
        region: 'Oromia Region',
        coords: [9.1, 40.4],
        resources: ['Gold', 'Potash', 'Tantalum', 'Salt', 'Limestone'],
        investment: 'Medium',
        population: '120M',
        gdp: '$250B',
        stability: 'Developing',
        reserves: 'Largest gold reserves on continent',
        valueAddition: ['Gold Refining', 'Fertilizer Production', 'Electronics'],
        description: 'Largest gold reserves on continent. Rapidly developing mining sector.'
    },
    {
        id: 12,
        country: 'Tanzania',
        region: 'Mwanza & Geita',
        coords: [-6.3, 34.4],
        resources: ['Gold', 'Tanzanite', 'Gemstones', 'Coal', 'Iron Ore'],
        investment: 'High',
        population: '65M',
        gdp: '$180B',
        stability: 'Stable',
        reserves: 'Significant gold reserves',
        valueAddition: ['Gold Refining', 'Jewelry', 'Gemstone Cutting'],
        description: 'Fourth-largest African gold producer with unique tanzanite deposits.'
    },
    {
        id: 13,
        country: 'Kenya',
        region: 'Rift Valley',
        coords: [-1.3, 36.8],
        resources: ['Soda Ash', 'Titanium', 'Gold', 'Coal'],
        investment: 'Medium',
        population: '54M',
        gdp: '$120B',
        stability: 'Moderate',
        reserves: 'World\'s largest soda ash deposits',
        valueAddition: ['Glass Manufacturing', 'Chemicals', 'Detergents'],
        description: 'World\'s largest soda ash deposits with strategic location.'
    },

    // North Africa
    {
        id: 14,
        country: 'Morocco',
        region: 'Khouribga',
        coords: [31.9, -6.9],
        resources: ['Phosphate', 'Iron Ore', 'Cobalt', 'Copper'],
        investment: 'High',
        population: '37M',
        gdp: '$145B',
        stability: 'Stable',
        reserves: 'World\'s largest phosphate reserves',
        valueAddition: ['Fertilizer Production', 'Chemicals', 'Phosphoric Acid'],
        description: 'World\'s largest phosphate reserves. Modern mining operations.'
    },
    {
        id: 15,
        country: 'Algeria',
        region: 'Sahara Region',
        coords: [28.0, 2.0],
        resources: ['Oil', 'Natural Gas', 'Iron Ore', 'Phosphate'],
        investment: 'High',
        population: '45M',
        gdp: '$190B',
        stability: 'Moderate',
        reserves: 'Africa\'s second-largest oil reserves',
        valueAddition: ['Oil Refining', 'LNG Production', 'Petrochemicals'],
        description: 'Africa\'s second-largest oil reserves and significant gas deposits.'
    },

    // Additional Strategic Locations
    {
        id: 16,
        country: 'Liberia',
        region: 'Grand Gedeh',
        coords: [4.5, -9.0],
        resources: ['Iron Ore', 'Gold', 'Diamond'],
        investment: 'Medium',
        population: '5.3M',
        gdp: '$3.5B',
        stability: 'Developing',
        reserves: 'Significant iron ore deposits',
        valueAddition: ['Iron Pelletization', 'Steel Production', 'Jewelry'],
        description: 'Rich mineral resources with improving business environment.'
    },
    {
        id: 17,
        country: 'Cameroon',
        region: 'Adamaoua',
        coords: [6.0, 12.0],
        resources: ['Bauxite', 'Iron Ore', 'Gold', 'Oil'],
        investment: 'Medium',
        population: '28M',
        gdp: '$52B',
        stability: 'Moderate',
        reserves: 'Significant bauxite deposits',
        valueAddition: ['Aluminum Smelting', 'Oil Refining', 'Mining Equipment'],
        description: 'Central African mineral hub with diverse resources.'
    }
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = expansiveMineral Deposits;
}
