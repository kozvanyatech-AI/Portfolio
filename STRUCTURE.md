# Project Structure Documentation

## Folder Structure

```
kozvanya-agency/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx          # Main layout wrapper
│   │   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   │   ├── Footer.jsx          # Footer with links and social
│   │   │   └── PageContainer.jsx   # Page content wrapper
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── Card.jsx                # Reusable card component
│   │   ├── Badge.jsx               # Reusable badge component
│   │   ├── SectionHeader.jsx       # Reusable section header
│   │   ├── Header.jsx              # (Legacy - can be removed)
│   │   ├── Hero.jsx                # (Legacy - can be removed)
│   │   └── Features.jsx            # (Legacy - can be removed)
│   │
│   ├── pages/
│   │   ├── HomePage.jsx            # Home page
│   │   └── ServicesPage.jsx        # Services page
│   │
│   ├── assets/
│   │   ├── images/                 # Store images here
│   │   └── icons/                  # Store icons here
│   │
│   ├── hooks/
│   │   └── useNavbarState.js       # Navbar state management hook
│   │
│   ├── utils/
│   │   ├── helpers.js              # Utility helper functions
│   │   └── constants.js            # App constants and configuration
│   │
│   ├── App.jsx                     # Main app component with routing
│   ├── main.jsx                    # React DOM render entry point
│   └── index.css                   # Global styles & Tailwind directives
│
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # Project documentation
```

## Key Components

### Layout System
- **Layout.jsx**: Main wrapper component that includes Navbar, PageContainer, and Footer
- **Navbar.jsx**: Responsive navigation with mobile menu support
- **Footer.jsx**: Footer with multiple columns and social links
- **PageContainer.jsx**: Wrapper for page content with proper spacing

### Reusable Components
- **Button**: Flexible button with variants (primary, secondary, outline, ghost)
- **Card**: Container component with optional hover effects
- **Badge**: Small label component with multiple variants
- **SectionHeader**: Standardized header for content sections

### Pages
- **HomePage.jsx**: Main landing page with hero and features
- **ServicesPage.jsx**: Services showcase page

### Hooks
- **useNavbarState**: Custom hook for navbar state management

### Utilities
- **helpers.js**: Helper functions (formatDate, truncateText, classNames)
- **constants.js**: App-wide configuration and constants

## How to Add New Pages

1. Create a new file in `src/pages/YourPage.jsx`
2. Import and use the Layout component:

```jsx
import Layout from '../components/Layout/Layout'

function YourPage() {
  return (
    <Layout>
      {/* Your page content */}
    </Layout>
  )
}

export default YourPage
```

3. Add routing in `App.jsx` to display the page

## How to Add New Components

1. Create a component in `src/components/`
2. Keep components small and focused on a single responsibility
3. Make them reusable with props
4. Export as default

Example:

```jsx
function MyComponent({ title, content, className = '' }) {
  return (
    <div className={`p-4 rounded-lg ${className}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default MyComponent
```

## Styling Guidelines

- Use Tailwind CSS classes for all styling
- Define custom Tailwind components in `index.css` for reusable patterns
- Use the custom color palette (primary-50 to primary-900)
- Maintain dark theme throughout (class="dark")
- Use `container-custom` for consistent spacing

## Best Practices

### Component Organization
- Keep components focused and single-responsibility
- Co-locate related components (e.g., Layout components in /Layout folder)
- Create an index.js if a folder has multiple related exports

### Reusability
- Extract common patterns into reusable components (Button, Card, etc.)
- Use props to customize component behavior
- Avoid hardcoding values - use constants instead

### Styling
- Prefer Tailwind classes over CSS files
- Use CSS layers for component styles in index.css
- Keep responsive design mobile-first

### State Management
- Use React hooks for local state (useState, useReducer)
- Create custom hooks for reusable logic
- Use props to pass data down
- Consider Context API for global state if needed

## Future Enhancements

1. **Routing**: Install React Router for client-side routing
   ```bash
   npm install react-router-dom
   ```

2. **Forms**: Add form handling library (React Hook Form, Formik)
   ```bash
   npm install react-hook-form
   ```

3. **State Management**: Add global state management (Redux, Zustand)
   ```bash
   npm install zustand
   ```

4. **API Integration**: Set up axios or fetch for API calls
   ```bash
   npm install axios
   ```

5. **Animation**: Add animation library (Framer Motion)
   ```bash
   npm install framer-motion
   ```

## Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:3000` in your browser.
