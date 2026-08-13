export default function AddTaskButton({ onClick }) {
  return (
    <div className="mb-6 flex justify-center">
      <button
        onClick={onClick}
        className="rounded-xl bg-slate-900 px-6 py-3 text-base font-bold text-white shadow-lg transition hover:bg-slate-800 cursor-pointer hover:shadow-xl"
      >
        + Adicionar tarefa
      </button>
    </div>
  );
}