import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({
  task,
  onEdit,
  isOverlay = false,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: task.id,
    disabled: isOverlay,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        backgroundColor: task.cardColor,
      }}
      {...listeners}
      {...attributes}
      className="rounded-xl p-4 shadow-md"
    >
      <h3
        className="font-semibold"
        style={{ color: task.titleColor }}
      >
        {task.title}
      </h3>

      <p
        className="mt-1 text-sm"
        style={{ color: task.descriptionColor }}
      >
        {task.description}
      </p>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => onEdit(task)}
          className="rounded-lg px-3 py-2 text-gray-800 transition hover:bg-gray-100 cursor-pointer hover:text-blue-600"
          title="Editar tarefa"
        >
          ✎ Editar
        </button>
      </div>
    </div>
  );
}