# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static web application that showcases the Smartway Mobile team's achievements. It's a single-page application built with vanilla HTML, CSS, and JavaScript that displays team members and their professional achievements in an interactive card-based layout.

## Development Commands

### Local Development
```bash
# Serve the application locally using Python's built-in server
python3 -m http.server 8000

# Alternative: Use Node.js http-server (if installed globally)
npx http-server -p 8000

# Alternative: Use PHP's built-in server
php -S localhost:8000
```

### Testing
```bash
# Open the application in browser after starting local server
open http://localhost:8000

# Check for JavaScript errors in browser console
# Check responsive design on different screen sizes
```

### Git Operations
```bash
# Check current status
git status

# View recent commits
git --no-pager log --oneline -10

# Update local branch
git pull origin main
```

## Code Architecture

### File Structure
- `index.html` - Main HTML document containing the team member layout
- `script.js` - JavaScript for interactive functionality and achievement data
- `styles.css` - CSS styling with responsive design and animations
- `source/` - Directory containing team member photos and logo assets

### Core Components

**Achievement System**: The application centers around a data-driven achievement system where each team member has multiple achievement cards that can be expanded and viewed in detail.

**Modal Interaction**: Click-to-view modal system for achievement details, with keyboard and mouse event handling for accessibility.

**Responsive Grid Layout**: CSS Grid-based layout that adapts from multi-column desktop view to single-column mobile view.

**Progressive Disclosure**: "Show more achievements" functionality that reveals hidden achievement cards with smooth animations.

### Key JavaScript Architecture

**Data Management**: All achievement data is stored in a centralized `achievementsData` object indexed by achievement ID, allowing for easy content updates and internationalization.

**Event-Driven Interactions**: 
- Achievement card clicks trigger modal displays
- Expand/collapse buttons toggle visibility of additional achievements
- Keyboard and click-outside-modal handlers for user experience

**Animation System**: CSS transitions combined with JavaScript timing for smooth reveal/hide animations and card loading effects.

### CSS Architecture

**Component-Based Styling**: Each UI component (team cards, achievement items, modal) has dedicated CSS classes with hover states and transitions.

**Responsive Breakpoints**: 
- Desktop: Multi-column grid layout
- Tablet (768px): Single column with adjusted spacing
- Mobile (480px): Compressed achievement cards

**Design System**: Consistent color palette, typography, and spacing using CSS custom properties (though not explicitly defined, consistently applied throughout).

### Team Member Data Structure

Each team member section follows a consistent pattern:
- Header with avatar and role information
- Achievement grid with visible and hidden items
- Expand/collapse functionality for members with more than 3 achievements
- Data attributes for JavaScript targeting (`data-member`, `data-achievement`)

## Development Notes

- **Static Assets**: All images are referenced from the `source/` directory and external Unsplash URLs for achievement placeholders
- **No Build Process**: This is a vanilla web application requiring no compilation or bundling
- **Browser Compatibility**: Uses modern JavaScript (ES6+) and CSS features - test on target browser versions
- **Image Optimization**: Team photos should be optimized for web (recommended: 200x200px for avatars)
- **Content Updates**: Achievement data can be updated by modifying the `achievementsData` object in `script.js`

## UI Behavior Patterns

**Card Interactions**: All achievement cards are clickable and trigger modals with detailed information. Cards have hover effects and scaling animations.

**Expand/Collapse Logic**: Team members with more than 3 achievements show an expand button. The grid layout changes from horizontal scroll to wrap mode when expanded.

**Modal Management**: Modal system includes backdrop blur, click-outside-to-close, escape key handling, and body scroll prevention during modal display.

**Loading Animations**: Team member cards appear with staggered timing on page load using CSS transitions and JavaScript setTimeout.