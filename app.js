function App() {
    const [tasks, setTasks] = React.useState([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const tasksData = await fetchTasks();
            setTasks(tasksData);
            setLoading(false);
        } catch (error) {
            reportError(error);
            setLoading(false);
        }
    };

    const handleDragStart = (e, task) => {
        try {
            e.dataTransfer.setData('taskId', task.id);
            e.target.classList.add('dragging');
        } catch (error) {
            reportError(error);
        }
    };

    const handleDragOver = (e) => {
        try {
            e.preventDefault();
        } catch (error) {
            reportError(error);
        }
    };

    const handleDrop = async (e, status) => {
        try {
            e.preventDefault();
            const taskId = e.dataTransfer.getData('taskId');
            const updatedTasks = tasks.map(task => {
                if (task.id.toString() === taskId) {
                    return { ...task, status };
                }
                return task;
            });
            setTasks(updatedTasks);
            await updateTask(taskId, { status });
            document.querySelector('.dragging')?.classList.remove('dragging');
        } catch (error) {
            reportError(error);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            const createdTask = await createTask(newTask);
            setTasks([...tasks, createdTask]);
        } catch (error) {
            reportError(error);
        }
    };

    const filterTasks = (status) => {
        return tasks.filter(task => task.status === status);
    };

    if (loading) {
        return (
            <div data-name="loading" className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-50 to-blue-50">
                <div className="text-center">
                    <i className="fas fa-spinner fa-spin fa-3x text-indigo-600"></i>
                    <p className="mt-4 text-gray-600">Loading tasks...</p>
                </div>
            </div>
        );
    }

    return (
        <div data-name="app-container" className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
            <div className="container mx-auto px-4 py-8">
                <header data-name="app-header" className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-indigo-900">Task Management Dashboard</h1>
                    <button
                        data-name="add-task-button"
                        onClick={() => setIsModalOpen(true)}
                        className="add-task-button bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600"
                    >
                        <i className="fas fa-plus mr-2"></i>
                        Add New Task
                    </button>
                </header>

                <div data-name="kanban-board" className="kanban-board flex flex-col md:flex-row gap-6">
                    <Column
                        title="To Do"
                        tasks={filterTasks('To Do')}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'To Do')}
                    />
                    <Column
                        title="In Progress"
                        tasks={filterTasks('In Progress')}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'In Progress')}
                    />
                    <Column
                        title="Done"
                        tasks={filterTasks('Done')}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'Done')}
                    />
                </div>

                <AddTaskModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddTask}
                />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
