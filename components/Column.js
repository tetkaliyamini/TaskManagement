function Column({ title, tasks, onDragStart, onDrop, onDragOver }) {
    try {
        const getColumnClass = () => {
            switch(title) {
                case 'To Do': return 'todo';
                case 'In Progress': return 'in-progress';
                case 'Done': return 'done';
                default: return '';
            }
        };

        return (
            <div 
                data-name="kanban-column"
                className={`task-column p-4 rounded-lg w-full md:w-1/3 ${getColumnClass()}`}
                onDrop={onDrop}
                onDragOver={onDragOver}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 data-name="column-title" className="column-header text-xl font-bold">
                        {title}
                        <span className="task-count">{tasks.length}</span>
                    </h2>
                </div>
                <div data-name="tasks-container" className="space-y-4">
                    {tasks.length > 0 ? (
                        tasks.map(task => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                onDragStart={onDragStart}
                                status={getColumnClass()}
                            />
                        ))
                    ) : (
                        <div className="empty-column">
                            <i className="fas fa-inbox text-2xl mb-2"></i>
                            <p>No tasks yet</p>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return <div data-name="error">Error loading column</div>;
    }
}
