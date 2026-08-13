import TaskCard from "./TaskCard";
import Modal from "./TaskFormModal";

const columnStyles = {
  todo: {
    title: "A Fazer",
    description: "Tarefas pendentes",
    container:
      "border-red-400/40 bg-gradient-to-b from-red-500/15 via-red-500/5 to-white",
    titleColor: "text-red-600",
    badge: "bg-red-500",
    accent: "bg-red-500",
  },

  progress: {
    title: "Em Progresso",
    description: "Tarefas em andamento",
    container:
      "border-blue-400/40 bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-white",
    titleColor: "text-blue-600",
    badge: "bg-blue-500",
    accent: "bg-blue-500",
  },

  done: {
    title: "Concluídas",
    description: "Tarefas finalizadas",
    container:
      "border-emerald-400/40 bg-gradient-to-b from-emerald-500/15 via-emerald-500/5 to-white",
    titleColor: "text-emerald-600",
    badge: "bg-emerald-500",
    accent: "bg-emerald-500",
  },
};

export default function Column({ type, handleEdit, tasks = [] }) {
  const style = columnStyles[type];

  return (
    <section
      className={`flex min-h-[70vh] flex-col overflow-hidden rounded-2xl border shadow-xl shadow-black/5 ${style.container}`}
    >
      {/* Cabeçalho */}
      <header className="border-b border-black/5 bg-white/70 px-5 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${style.accent}`} />

            <h2
              className={`text-xl font-extrabold tracking-tight ${style.titleColor}`}
            >
              {style.title}
            </h2>
          </div>

          <span
            className={`flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold text-white shadow-md ${style.badge}`}
          >
            {tasks.length}
          </span>
        </div>

        <p className="mt-1 ml-6 text-sm text-gray-500">
          {style.description}
        </p>
      </header>

      {/* Lista de tarefas */}
      <div className="flex-1 space-y-3 p-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </section>
  );
}