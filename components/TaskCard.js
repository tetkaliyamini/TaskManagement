function TaskCard({ task, onDragStart, status }) {
    try {
        const formatDate = (dateString) => {
            const today = new Date().toISOString().split('T')[0];
            const twoDaysAgo = new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0];
            
            if (dateString === today) {
                return 'Today';
            } else if (dateString === twoDaysAgo) {
                return '2 Days Ago';
            }
            return new Date(dateString).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric'
            });
        };

        return (
            <div 
                data-name="task-card"
                className={`task-card bg-white p-4 mb-4 rounded-lg shadow-md ${status}`}
                draggable="true"
                onDragStart={(e) => onDragStart(e, task)}
            >
                <div className="flex justify-between items-start mb-2">
                    <h3 data-name="task-title" className="text-lg font-semibold">{task.title}</h3>
                </div>
                <p data-name="task-description" className="text-gray-600 text-sm mb-3">{task.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                    {task.tags && task.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div data-name="task-meta" className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                        <span className="task-meta-icon bg-blue-100 text-blue-600">
                            <i className="fas fa-user-circle"></i>
                        </span>
                        <span className="text-gray-600">{task.assignee}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="task-meta-icon bg-purple-100 text-purple-600">
                            <i className="fas fa-calendar"></i>
                        </span>
                        <span className="text-gray-600">{formatDate(task.dueDate)}</span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return <div data-name="error">Error loading task card</div>;
    }
}
