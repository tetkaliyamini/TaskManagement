# Task Management Dashboard

A beautiful and interactive Kanban-style task management dashboard built with React and TailwindCSS.

## Quick Start Guide

### Method 1: Using Python's Built-in HTTP Server

1. Clone or download this repository to your local machine
2. Open a terminal/command prompt
3. Navigate to the project directory
4. Run one of these commands based on your Python version:
   bash
   # For Python 3.x
   python -m http.server 8000

   # For Python 2.x
   python -m SimpleHTTPServer 8000
   
5. Open your browser and visit: `http://localhost:8000`

### Method 2: Using Node.js http-server

1. First, install http-server globally:
   bash
   npm install -g http-server
   
2. Navigate to the project directory in terminal
3. Run:
   bash
   http-server
   
4. Open your browser and visit: `http://localhost:8080`

### Method 3: Using VS Code Live Server

1. Install Visual Studio Code
2. Install the "Live Server" extension
3. Open the project folder in VS Code
4. Right-click on `index.html`
5. Select "Open with Live Server"
6. The project will automatically open in your default browser

### Method 4: Direct File Opening

Simply double-click the `index.html` file to open it in your default web browser.

## Project Structure


├── index.html          # Main HTML file
├── styles/
│   └── main.css       # Main stylesheet
├── components/
│   ├── TaskCard.js    # Task card component
│   ├── Column.js      # Kanban column component
│   └── AddTaskModal.js # Add task modal component
├── utils/
│   └── api.js         # API utilities
└── app.js             # Main React application


## Features

-  Responsive design that works on all devices
-  Beautiful UI with smooth animations
-  Drag and drop tasks between columns
-  Add new tasks with a modal form
-  Real-time status updates
-  Three status columns: To Do, In Progress, and Done
-  Gradient backgrounds and subtle animations
-  Interactive hover effects

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Troubleshooting

If you encounter any issues:

1. Make sure all files are in the correct directory structure
2. Check if your browser is up to date
3. Clear your browser cache
4. Try using a different browser
5. Check the browser's console for any error messages

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for any purpose!
