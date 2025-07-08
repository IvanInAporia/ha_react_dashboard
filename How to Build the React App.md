## 📦 How to Build the React App for Your Home Assistant Add-on

### 1. Create Your React App
Use [Vite](https://vitejs.dev/) or [Create React App](https://create-react-app.dev/) to create the project.

Using Vite:
```bash
npm create vite@latest my-dashboard -- --template react
cd my-dashboard
npm install
```

### 2. Replace App Content
Copy your dashboard code (like from the canvas) into `src/App.jsx`. You can also customize `index.html` and add Tailwind or other styles.

### 3. Build the React App
```bash
npm run build
```
This will generate a production build in the `dist/` folder.

### 4. Copy Build to Add-on
Copy the contents of the `dist/` folder into your add-on under:
```
custom_react_dashboard/server/dist/
```

It should contain:
```
custom_react_dashboard/
└── server/
    └── dist/
        ├── index.html
        ├── assets/
        └── ...
```

### 5. Rebuild and Start Add-on
In Home Assistant:
- Go to Settings → Add-ons
- Reinstall or rebuild the add-on
- Start it

The React app will now load through Ingress via the sidebar.
