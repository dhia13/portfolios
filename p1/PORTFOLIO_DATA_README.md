# Portfolio Data Export

This file (`portfolio-data.json`) contains all the data from your portfolio website in a structured JSON format. You can use this data to quickly rebuild your portfolio or share it with AI assistants to generate new portfolio websites.

## File Structure

The JSON file contains the following sections:

### 1. **personal**
- Name, title, greeting
- Contact information (email, location)
- Social media links (GitHub, LinkedIn)
- CV file references

### 2. **about**
- Professional summary
- Professional experience (companies, roles, durations)
- Technical expertise (organized by category)
- Education and languages
- Top skills with percentages

### 3. **skills**
- Detailed skills organized by category:
  - Frontend
  - Backend
  - Databases
  - Mobile & Desktop
  - DevOps & Tools
- Each skill includes a percentage/proficiency level

### 4. **experienceTimeline**
- Chronological work experience
- Dates, roles, companies, descriptions

### 5. **freelance**
- Freelance work information

### 6. **services**
- Service offerings with descriptions and icons

### 7. **projects**
- Complete project details including:
  - Title, subtitle, category
  - Description, duration, role, status
  - Technologies used
  - Features list
  - Links and badges
  - Images

### 8. **testimonials**
- Client testimonials with author information

### 9. **contact**
- Contact section information

### 10. **seo**
- SEO meta tags
- Open Graph data
- Twitter Card data
- Structured data (JSON-LD)

### 11. **footer**
- Footer links and resources

## How to Use

### For AI Assistants
Simply provide this JSON file to an AI assistant and ask them to:
- "Build a portfolio website using the data from portfolio-data.json"
- "Create a new portfolio design using this data"
- "Update my portfolio with this information"

### For Manual Use
You can:
1. Import the JSON into your code
2. Use it as a data source for static site generators
3. Convert it to other formats (YAML, CSV, etc.)
4. Use it as a backup of your portfolio content

## Example Usage

### JavaScript/Node.js
```javascript
const portfolioData = require('./portfolio-data.json');
console.log(portfolioData.personal.name);
console.log(portfolioData.projects.length);
```

### Python
```python
import json

with open('portfolio-data.json', 'r') as f:
    portfolio_data = json.load(f)
    
print(portfolio_data['personal']['name'])
print(len(portfolio_data['projects']))
```

## Updating the Data

To update your portfolio data:
1. Edit `portfolio-data.json` directly
2. Or update your portfolio website and re-export the data
3. Keep this file in version control for easy tracking

## Notes

- All image paths are relative to the project root
- URLs are absolute and point to live resources
- The data structure is designed to be flexible and extensible
- You can add new fields or sections as needed

## Last Updated

Export Date: 2024-12-19
Version: 1.0.0


