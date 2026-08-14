export default function TaskCard({ 
  task, 
  onEdit }) {
  return (
    <div 
    draggable
    className="rounded-xl bg-white p-4 shadow-md">
      <h3 className="font-semibold">{task.title}</h3>

      <p className="mt-1 text-sm text-gray-500">
        {task.description}
      </p>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => onEdit(task)}
          className="rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 cursor-pointer hover:text-blue-600"
          title="Editar tarefa"
        >
          ✎
        </button>
      </div>
    </div>
  );
}