import { useState } from "react";

export default function TaskFormModal({
  isOpen,
  mode = "create",
  task = null,
  handleDeleteButtonModal,
  onClose,
  onSave,
  onChange,
  error,
}) {
  if (!isOpen) return null;
  const isEditing = mode === "edit";

  const [title, setTitle] = useState(isEditing ? task?.title : "");
  const [titleColor, setTitleColor] = useState("#1e293b");
  const [description, setDescription] = useState(
    isEditing ? task?.description : ""
  );
  const [descriptionColor, setDescriptionColor] = useState("#1e293b");
  const [cardColor, setCardColor] = useState("#ffffff");
  const [status, setStatus] = useState(isEditing ? task?.status : "todo");

  const taskData = {
    id: task?.id,
    title,
    titleColor,
    description,
    descriptionColor,
    cardColor,
    status,
  };

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
                {error && (
                  <p className="mt-2 text-sm bg-red-100 p-2 text-red-600">
                    {error}
                  </p>
                )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg p-2 text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Selecione o estado da tarefa
          </label>

          <div className="flex gap-3">
          <label
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-sm font-semibold transition ${
              status === "todo"
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-slate-200 text-slate-500 hover:border-slate-300"
          }`}
        >
          <input
            type="radio"
            name="status"
            value="todo"
            checked={status === "todo"}
            onChange={(event) => setStatus(event.target.value)}
            className="sr-only"
          />

          <span className="h-3 w-3 rounded-full border-2 border-current" />
                A Fazer
          </label>

          <label
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-sm font-semibold transition ${
              status === "progress"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-200 text-slate-500 hover:border-slate-300"
            }`}
          >
            <input
              type="radio"
              name="status"
              value="progress"
              checked={status === "progress"}
              onChange={(event) => setStatus(event.target.value)}
              className="sr-only"
            />

            <span className="h-3 w-3 rounded-full border-2 border-current" />
            Em Progresso
          </label>

          <label
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-sm font-semibold transition ${
              status === "done"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-200 text-slate-500 hover:border-slate-300"
            }`}
          >
            <input
              type="radio"
              name="status"
              value="done"
              checked={status === "done"}
              onChange={(event) => setStatus(event.target.value)}
              className="sr-only"
            />

            <span className="h-3 w-3 rounded-full border-2 border-current" />
            Concluída
          </label>
        </div>
      </div>           

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Título
          </label>

          <input
            type="text"
            placeholder="Escreva seu título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Cor do título
          </label>

          <input
            type="color"
            value={titleColor}
            onChange={(event) => setTitleColor(event.target.value)}
            className="h-10 w-16 cursor-pointer rounded-lg border border-slate-200 p-1"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Descrição
          </label>

          <textarea
            placeholder="Escreva sua descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows="5"
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Cor da descrição
          </label>

          <input
            type="color"
            value={descriptionColor}
            onChange={(event) => setDescriptionColor(event.target.value)}
            className="h-10 w-16 cursor-pointer rounded-lg border border-slate-200 p-1"
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
            value={cardColor}
            onChange={(event) => setCardColor(event.target.value)}
            className="h-10 w-16 cursor-pointer rounded-lg border border-slate-200 p-1"
          />
        </div>

        {isEditing ? (
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleDeleteButtonModal}
              className="flex-1 cursor-pointer rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
            >
              Excluir tarefa
            </button>

            <button
              type="button"
              onClick={() => onChange(taskData)}
              className="flex-1 cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
            >
              Salvar alterações
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => onSave(taskData)}
            className="w-full cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
          >
            Criar tarefa
          </button>
        )}
      </div>
    </div>
  );
}