export default function TaskCard({ task }) {
  return (
    <div
      draggable
      onDragStart={() => console.log("começou")}
      onDragEnd={() => console.log("terminou")}
      className="rounded-xl bg-white p-4 shadow-md"
    >
      <h3 className="font-semibold">{task.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{task.description}</p>
    </div>
  );
}