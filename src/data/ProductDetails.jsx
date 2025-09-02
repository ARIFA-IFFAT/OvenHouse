const ProductDetails = [
  {
    id: 1,
    slug: "bod-incubator", // 👈 unique slug
    prodName: 'TM-5 : BOD INCUBATOR',
    img: 'images/product1.png',
    prodDesc:
      'Reliable and energy-efficient incubator designed for precise temperature control in laboratory applications.',
    
    keyHighlights: [
      "Wide Temperature Range: 5°C to 60°C with precise digital controller",
      "High Accuracy: Uniform temperature with PID control system",
      "Sturdy Construction: Double-walled chamber with insulation",
      "Efficient Cooling: CFC-free eco-friendly system",
      "User-Friendly Design: Adjustable shelves",
      "Energy Efficient: Low power consumption",
      "Safe Operation: Over-temperature protection",
      "Versatile Applications: Suitable for BOD test, microbial culture, enzyme reactions"
    ],

    specifications: [
      "Temperature Range: 5°C to 60°C",
      "Accuracy: ±0.1°C",
      "Controller: Digital PID",
      "Inner Chamber: Stainless Steel",
      "Insulation: Glass Wool",
      "Power Supply: 220V AC, 50Hz",
      "Cooling System: CFC-free refrigeration",
    
    ]
  },
  {
    id: 2,
    slug: "fume-hood", // 👈 unique slug
    prodName: 'TM-10 : FUME HOOD',
    img: 'images/product2.png',
    prodDesc:
      'Captures and removes harmful fumes using ventilation, ensuring lab safety during experiments.',
    
    keyHighlights: [
      "Strong Air Suction for hazardous fumes",
      "Corrosion-resistant material",
      "Energy-efficient blower system",
      "LED Lighting inside chamber",
      "Transparent front sash for visibility",
      "Safe exhaust system",
    ],

    specifications: [
      "Airflow Type: Ducted / Ductless",
      "Materia: Powder coated GI / Stainless Steel",
      "Front Sash: Toughened Glass",
      "Lighting: LED",
      "Noise Level: < 65 dB",
      "Power Supply: 220V AC, 50Hz",
    ]
  }
];

export default ProductDetails;
