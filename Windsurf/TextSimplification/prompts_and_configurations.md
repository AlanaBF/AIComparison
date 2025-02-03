# Text Simplification Prompts and Configurations

## Model Configuration
```csharp
private const string MODEL_ID = "google/flan-t5-base";

// Model parameters
var payload = new { 
    inputs = prompt, 
    parameters = new { 
        max_length = 256,
        temperature = 0.7,
        do_sample = true
    } 
};
```

## Optimized Prompts by Reading Level

### Child Level (Age 8-12)
```
Rewrite this for a young child (age 8-12):
1. Use simple words like 'big', 'small', 'join', 'move'
2. Use examples like 'magnets sticking together'
3. Explain hard words in [brackets]
4. Write exactly 4 simple sentences

Example: 'Think about when you play with magnets. They stick together like magic!'

Text to explain:
```

### Teen Level (Age 13-17)
```
Rewrite this for a teenager (age 13-17):
1. Use everyday words and explain science terms
2. Use examples from phones or computers
3. Keep it interesting and clear
4. Write exactly 4 sentences

Text to explain:
```

### Adult Level
```
Rewrite this for a general adult audience:
1. Use clear language with brief explanations
2. Include helpful examples
3. Keep technical terms but explain them
4. Write exactly 4 sentences

Text to explain:
```

### Expert Level
```
Restructure this text for a physics expert while maintaining technical rigor:
1. Preserve quantum mechanical terminology and mathematical concepts
2. Reference relevant theoretical frameworks (e.g., Bell's theorem, quantum information theory)
3. Emphasize mathematical and experimental foundations
4. Include implications for quantum computing and information theory
5. Write exactly 4 technical sentences

Example style: 'Non-local quantum correlations manifest in entangled systems through violation of Bell inequalities...'

Text to explain:
```

## UI Color Schemes

### Gradients by Reading Level
```css
// Header
background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);

// Child Level
background: linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%);

// Teen Level
background: linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%);

// Adult Level
background: linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%);

// Expert Level
background: linear-gradient(135deg, #5EE7DF 0%, #B490CA 100%);
```

## Icons and Emojis by Level
- Child: 'child_care' icon, "🌟 Kid-Friendly Version"
- Teen: 'school' icon, "🎓 Teen-Friendly Version"
- Adult: 'person' icon, "👥 General Version"
- Expert: 'psychology' icon, "🔬 Expert Version"

## Example Input Text for Testing
```
Quantum entanglement, a fundamental phenomenon in quantum mechanics, manifests when two or more particles become inextricably linked, such that the quantum state of each particle cannot be described independently. This non-local correlation persists regardless of the spatial separation between the entangled particles, leading to what Einstein famously referred to as 'spooky action at a distance.' The phenomenon has profound implications for quantum computing, cryptography, and our understanding of the fundamental nature of reality, as it appears to violate classical physics' principle of locality and challenges our intuitive understanding of cause and effect relationships in the physical world.
```

## Key Learnings
1. Shorter, more focused prompts work better than longer ones
2. Including examples in prompts helps maintain consistent style
3. Specifying exact number of sentences (4) helps control output length
4. Age-specific vocabulary guidance improves appropriateness
5. Visual differentiation helps users quickly identify reading levels
6. Playful elements (emojis, icons) make the interface more engaging
7. Gradient backgrounds create visual hierarchy and improve UX

## Model Performance Notes
- FLAN-T5 performed better than OPT for our use case
- Lower temperature (0.7) provides good balance of creativity and consistency
- max_length of 256 is sufficient for most simplifications
- Consistent 4-sentence output helps maintain response quality
