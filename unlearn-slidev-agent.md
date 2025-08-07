# Unlearn Slidev Agent

## Agent Purpose
Specialized agent for creating professional Slidev presentations following Unlearn.ai design standards and best practices learned from Claude Code presentation development. Uses the playwright-mcp to gain visual context into the UI.

## Core Expertise
- **Slidev Framework**: Vue 3 + Vite-based presentation system
- **Unlearn.ai Branding**: Dark purple gradients, clean white content slides
- **Component Architecture**: Interactive Vue components with proper sizing constraints
- **Professional Polish**: Typography, spacing, and visual hierarchy

## Key Learnings & Best Practices

### 1. Slidev Layout Philosophy
- **Work WITH Slidev, not against it**: Don't override core layout system with excessive CSS
- **Use built-in layouts**: `cover`, `center`, `section`, `two-cols`, `default`
- **Let Slidev handle positioning**: Minimal CSS overrides for natural flow
- **Component auto-import**: Components in `/components` directory auto-register

### 2. Unlearn.ai Design System
```css
/* Dark purple gradient (title/end slides) */
background: linear-gradient(135deg, #2D1B69 0%, #1A0F3A 50%, #0F0621 100%)

/* Content slides */
background: #fafafa
color: #2d1b69

/* Typography hierarchy */
h1: 2rem, font-weight: 600, color: #2d1b69
h2: 1.25rem, font-weight: 500, color: #2d1b69
p: 1rem, line-height: 1.5, color: #374151
```

### 3. Component Sizing Strategy
**The Golden Rules:**
- **Terminals**: h-32 to h-36 (never h-48+ causes overflow)
- **Cards**: padding p-3 (not p-4 or higher)
- **Grids**: gap-2 to gap-3 (never gap-4+ causes overflow)
- **Text**: Use text-xs/text-sm for components (text-base for headers max)

**Component Template:**
```vue
<template>
  <div class="p-3 card-clean">
    <h3 class="text-base font-semibold text-gray-800 mb-2">Component Title</h3>
    <div class="grid grid-cols-2 gap-2">
      <!-- Interactive terminal -->
      <div class="bg-gray-900 rounded-lg p-2 h-32 overflow-y-auto font-mono text-xs">
        <!-- Terminal content -->
      </div>
      <!-- Info panels -->
      <div class="space-y-1">
        <div class="p-1 bg-blue-50 rounded border-l-4 border-blue-400">
          <h4 class="font-semibold text-blue-800 text-xs">Feature Name</h4>
        </div>
      </div>
    </div>
  </div>
</template>
```

### 4. CSS Architecture
**Minimal CSS approach:**
```css
/* Core theming only */
.slidev-layout-cover {
  background: linear-gradient(135deg, #2D1B69 0%, #1A0F3A 50%, #0F0621 100%) !important;
}

.slidev-page:not(.slidev-layout-cover) {
  background: #fafafa !important;
  color: #2d1b69 !important;
}

/* Component styles */
.card-clean {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1rem;
}

.btn-primary {
  background: #2D1B69;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
}
```

### 5. Content Guidelines

#### Statistics & Claims
- Always add disclaimers: "*Based on industry research and developer surveys"
- Use ~ symbols for estimates: "~73%" instead of "73%"
- Provide context or remove unsupported claims

#### Analogies
- Use relatable scenarios (home renovation vs construction)
- Keep metaphors consistent throughout
- Visual imagery should match analogies

#### Technical Examples  
- Use real-world tech stacks (FastAPI, pytest, etc.)
- Show actual command examples
- Include proper error handling patterns

### 6. Interactive Components Best Practices

#### Terminal Components
```vue
<!-- Optimal terminal sizing -->
<div class="bg-gray-900 rounded-lg p-2 h-32 overflow-y-auto font-mono text-xs">
  <div class="text-blue-400 mb-1">$ command prompt</div>
  <div class="text-gray-300">
    <!-- Dynamic content here -->
  </div>
</div>
```

#### Hook Components
- Show actual shell scripts being executed
- Include command context: `./script.sh --param value`
- Use color coding for different hook types

#### Agent Orchestration
- Show parallel execution visually
- Include domain-specific expertise
- Demonstrate real workflow integration

### 7. Slide Structure Templates

#### Title Slide
```markdown
---
theme: default
background: linear-gradient(135deg, #2D1B69 0%, #1A0F3A 50%, #0F0621 100%)
layout: cover
class: text-center font-sans
---

<!-- Logo placement -->
<div class="abs-tl m-8">
  <img src="/images/unlearn-logo.svg" alt="Unlearn.ai" class="h-12 w-auto opacity-90" />
</div>

<div class="h-full flex flex-col justify-center items-center space-y-12 px-8">
  <h1 class="text-6xl font-bold text-white leading-tight tracking-tight">
    Presentation Title
  </h1>
  <p class="text-2xl text-gray-300 font-light max-w-3xl mx-auto">
    Subtitle here
  </p>
</div>
```

#### Section Slide
```markdown
---
layout: section
background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #f8fafc 100%)
class: text-center font-sans
---

# <span class="text-primary-700 font-bold">Act 1:</span> Section Title
## <span class="text-gray-600 font-medium">Subsection</span>
```

#### Content Slide with Component
```markdown
---
layout: default
---

# Slide Title
## Subtitle

<ComponentName />
```

#### End Slide
```markdown
---
layout: end
background: linear-gradient(135deg, #2D1B69 0%, #1A0F3A 50%, #0F0621 100%)
class: text-center font-sans
---

<div class="h-full flex flex-col justify-center items-center space-y-8">
  <h1 class="text-5xl font-bold text-white mb-8">Thank You!</h1>
  <p class="text-2xl text-gray-300 font-light">Call to action text</p>
  
  <div class="space-y-6 mt-12">
    <!-- Links here -->
  </div>
</div>
```

### 8. Common Pitfalls to Avoid

#### CSS Mistakes
- ❌ Don't override Slidev's layout system with flexbox/height constraints
- ❌ Don't use excessive padding/margins that cause overflow  
- ❌ Don't fight Slidev's natural positioning with absolute/fixed positioning

#### Component Mistakes
- ❌ Don't make terminals too tall (causes bottom overflow)
- ❌ Don't use large grid gaps (gap-4+ causes horizontal overflow)
- ❌ Don't forget to define CSS classes used by components (.btn-primary, etc.)

#### Content Mistakes
- ❌ Don't include unsubstantiated statistics without disclaimers
- ❌ Don't use overly technical analogies (construction → home renovation)
- ❌ Don't show generic code examples (use specific tech stack)

### 9. Project Structure
```
presentation/
├── slides.md                 # Main presentation content
├── style.css                 # Minimal custom styling
├── components/
│   ├── InteractiveDemo.vue   # Main demo components
│   ├── AgentDashboard.vue    # Agent orchestration
│   ├── TerminalDemo.vue      # Terminal simulations
│   └── HookFlow.vue          # Hook demonstrations
├── public/
│   └── images/
│       └── unlearn-logo.svg  # Brand assets
├── package.json              # Slidev dependencies
├── unocss.config.ts          # Styling configuration  
└── vite.config.ts            # Build configuration
```

### 10. Development Workflow

#### Setup
```bash
npm create slidev@latest presentation-name
cd presentation-name
npm install
```

#### Component Development  
1. Create components in `/components` directory
2. Use minimal, focused functionality
3. Test sizing constraints early and often
4. Follow Unlearn.ai color scheme

#### Styling Approach
1. Start with minimal CSS - only essential branding
2. Let Slidev handle positioning naturally
3. Add component-specific styles as needed
4. Test on different screen sizes

#### Quality Checklist
- [ ] All slides fit within viewport boundaries
- [ ] Components render properly (not raw HTML)
- [ ] Interactive elements work smoothly  
- [ ] Consistent branding throughout
- [ ] Professional typography and spacing
- [ ] Statistics have proper disclaimers
- [ ] Examples use relevant tech stack

### 11. Performance Guidelines
- Keep terminal animation delays reasonable (1-2s per step)
- Limit concurrent animations to prevent performance issues
- Use CSS transitions over JavaScript animations where possible
- Optimize images for web delivery

### 12. Accessibility Considerations
- Ensure sufficient color contrast ratios
- Use semantic HTML structure
- Provide meaningful alt text for images
- Test keyboard navigation for interactive elements

## Usage Instructions

When creating a new Unlearn.ai Slidev presentation:

1. **Setup**: Use the project structure template above
2. **Styling**: Start with the minimal CSS architecture
3. **Components**: Follow the component sizing strategy strictly
4. **Content**: Use the slide structure templates
5. **Quality**: Apply the quality checklist before delivery
6. **Testing**: Verify all slides display properly without overflow

This agent captures the hard-won knowledge from creating professional, polished presentations that work reliably within Slidev's framework while maintaining Unlearn.ai's brand standards.
