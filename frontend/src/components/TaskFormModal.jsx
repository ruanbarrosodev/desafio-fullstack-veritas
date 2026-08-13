export default function TaskFormModal({
  isOpen,
  mode = "create",
  task = null,
  handleDeleteRequest,
  onClose,
}) {
  if (!isOpen) return null;

  const isEditing = mode === "edit";
  

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {isEditing ? "Editar tarefa" : "Nova tarefa"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {isEditing
                ? "Altere as informações da tarefa."
                : "Preencha as informações da nova tarefa."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg p-2 text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Título
          </label>

          <input
            type="text"
            placeholder="Escreva seu título"
            defaultValue={isEditing ? task?.title : ""}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Cor do título
          </label>

          <input
            type="color"
            defaultValue="#1e293b"
            className="h-10 w-16 cursor-pointer rounded-lg border border-slate-200 p-1"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Descrição
          </label>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Cor da descrição
          </label>

          <input
            type="color"
            defaultValue="#1e293b"
            className="h-10 w-16 cursor-pointer rounded-lg border border-slate-200 p-1"
          />
        </div>


          <textarea
            placeholder="Escreva sua descrição"
            defaultValue={isEditing ? task?.description : ""}
            rows="5"
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="mb-5 border-t border-slate-200 pt-5">
          <p className="mb-3 text-sm font-semibold text-slate-700">
            Aparência do card
          </p>

          <label className="mb-2 block text-sm text-slate-500">
            Cor do card
          </label>

          <input
            type="color"
            defaultValue="#ffffff"
            className="h-10 w-16 cursor-pointer rounded-lg border border-slate-200 p-1"
          />
        </div>
        
                {isEditing ? (
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleDeleteRequest}
              className="flex-1 cursor-pointer rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
                  
            >
              Excluir tarefa
            </button>

            <button
              type="button"
              className="flex-1 cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
            >
              Salvar alterações
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="w-full cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
          >
            Criar tarefa
          </button>
        )}


      </div>
    </div>
  );
}