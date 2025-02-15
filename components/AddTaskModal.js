function AddTaskModal({ isOpen, onClose, onSubmit }) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [status, setStatus] = React.useState('To Do');

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            onSubmit({ title, description, status });
            setTitle('');
            setDescription('');
            setStatus('To Do');
            onClose();
        } catch (error) {
            reportError(error);
        }
    };

    if (!isOpen) return null;

    return (
        <div data-name="modal-overlay" className="modal-overlay fixed inset-0 flex items-center justify-center z-50">
            <div data-name="modal-content" className="modal-content bg-white p-6 rounded-lg w-96 shadow-2xl">
                <h2 data-name="modal-title" className="text-2xl font-bold mb-4 text-indigo-600">Add New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            data-name="title-input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            data-name="description-input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                            rows="3"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Status</label>
                        <select
                            data-name="status-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            data-name="cancel-button"
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-all duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            data-name="submit-button"
                            type="submit"
                            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-all duration-200"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
