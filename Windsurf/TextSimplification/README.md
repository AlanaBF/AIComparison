# Text Simplification App

A modern web application that simplifies complex text for different reading levels, from children to experts.

## Project Evolution

### 1. Initial Backend Development
- Implemented C# backend with ASP.NET Core
- Integrated Hugging Face API for text processing
- Created endpoints for text simplification
- Added support for different reading levels (Child, Teen, Adult, Expert)

### 2. Model and Prompt Improvements
- Started with `google/flan-t5-base` model
- Experimented with `facebook/opt-iml-max-1.3b`
- Finalized with optimized `google/flan-t5-base` configuration
- Enhanced prompts for better age-appropriate responses
- Added specific vocabulary guidance for each level

### 3. UI/UX Enhancements
#### Header Design
- Gradient background: `linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)`
- Added sparkle emojis ✨
- Modern typography and shadow effects

#### Input Interface
- Clean, modern card design with rounded corners
- Intuitive text input area with helpful placeholder
- Reading level selector with age-appropriate icons:
  - 🧒 Child (Age 8-12)
  - 👱 Teen (Age 13-17)
  - 👨 General Adult
  - 🎓 Expert
- Gradient transform button with hover effects

#### Result Cards
Each reading level has a unique visual identity:

**Child Level**
- Warm pink gradient: `linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)`
- Child-friendly icon: 'child_care'
- Title: "🌟 Kid-Friendly Version"

**Teen Level**
- Cool blue-pink gradient: `linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)`
- School icon: 'school'
- Title: "🎓 Teen-Friendly Version"

**Adult Level**
- Purple-blue gradient: `linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)`
- Person icon: 'person'
- Title: "👥 General Version"

**Expert Level**
- Teal-purple gradient: `linear-gradient(135deg, #5EE7DF 0%, #B490CA 100%)`
- Psychology icon: 'psychology'
- Title: "🔬 Expert Version"

### 4. Interactive Elements
- Hover animations on cards and buttons
- Loading spinner with playful message: "Working some magic... ✨"
- Smooth transitions and shadows
- Semi-transparent text backgrounds for better readability

## Setup Instructions

### API Key Configuration
1. Copy `appsettings.template.json` to a new file named `appsettings.json`
2. Replace `your-api-key-here` with your actual Hugging Face API key
3. Make sure never to commit your actual `appsettings.json` file to the repository

```bash
# Copy the template
cp appsettings.template.json appsettings.json

# Edit appsettings.json and add your API key
```

The `.gitignore` file is configured to prevent committing sensitive information like API keys.

## Technical Stack
- Backend: ASP.NET Core
- Frontend: Angular with Material UI
- AI: Hugging Face API with FLAN-T5 model
- Styling: Custom CSS with gradients and animations

## Key Features
1. Multi-level text simplification
2. Age-appropriate responses
3. Modern, intuitive interface
4. Real-time processing
5. Responsive design
6. Playful yet professional UI

## Future Improvements
- Add text-to-speech functionality
- Implement user accounts for saving simplifications
- Add more language models
- Create mobile app version
- Add support for multiple languages
