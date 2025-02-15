const API_URL = 'https://jsonplaceholder.typicode.com';

// Get today and two days ago dates in ISO format
const today = new Date().toISOString().split('T')[0];
const twoDaysAgo = new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0];

const sampleTasks = [
    {
        id: 1,
        title: "Design New Dashboard",
        description: "Create wireframes and mockups for the new admin dashboard interface",
        status: "In Progress",
        dueDate: today,
        assignee: "Yamini",
        tags: ["design", "ui/ux"]
    },
    {
        id: 2,
        title: "API Integration",
        description: "Implement REST API endpoints for user authentication",
        status: "To Do",
        dueDate: today,
        assignee: "Yamini",
        tags: ["backend", "api"]
    },
    {
        id: 3,
        title: "Bug Fixes",
        description: "Fix reported issues in the mobile navigation menu",
        status: "Done",
        dueDate: twoDaysAgo,
        assignee: "Yamini",
        tags: ["bugfix", "mobile"]
    },
    {
        id: 4,
        title: "User Testing",
        description: "Conduct user testing sessions for the new features",
        status: "In Progress",
        dueDate: today,
        assignee: "Yamini",
        tags: ["testing", "user-research"]
    },
    {
        id: 5,
        title: "Documentation",
        description: "Update API documentation with new endpoints",
        status: "To Do",
        dueDate: twoDaysAgo,
        assignee: "Yamini",
        tags: ["docs", "api"]
    }
];

async function fetchTasks() {
    try {
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return sampleTasks;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function createTask(task) {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            id: Date.now(),
            ...task,
            tags: [],
            assignee: "Yamini",
            dueDate: new Date().toISOString().split('T')[0]
        };
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function updateTask(taskId, updates) {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            id: taskId,
            ...updates
        };
    } catch (error) {
        reportError(error);
        throw error;
    }
}
