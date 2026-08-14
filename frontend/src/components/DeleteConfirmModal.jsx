export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Excluir tarefa
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Tem certeza que deseja excluir esta tarefa?
            </p>
          </div>

          {/* X */}
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg p-2 text-xl text-red-500 transition hover:bg-red-50 hover:text-red-700"
          >
            ×
          </button>
        </div>

        {/* Botões */}
        <div className="flex gap-3">
          {/* Não */}
          <button
            type="button"
            onClick={onClose}
            className="flex-1 cursor-pointer rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-800"
          >
            Não
          </button>

          {/* Sim */}
          <button
            type="button"
            onClick={() => onConfirm()}
            className="flex-1 cursor-pointer rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  );
}