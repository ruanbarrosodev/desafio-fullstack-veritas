import Column from "../components/Column";
import ButtonAddTask from "../components/ButtonAddTask";
import TaskFormModal from "../components/TaskFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "Configurar projeto",
    description: "Preparar estrutura inicial do projeto",
    status: "todo",
  },
  {
    id: 2,
    title: "Criar interface",
    description: "Desenvolver a interface do Kanban",
    status: "progress",
  },
  {
    id: 3,
    title: "Finalizar documentação",
    description: "Escrever README e documentação",
    status: "done",
  },
  {
    id: 4,
    title: "Criar componentes",
    description: "Criar os componentes reutilizáveis",
    status: "todo",
  },
  {
    id: 5,
    title: "Testar aplicação",
    description: "Verificar o funcionamento geral",
    status: "progress",
  },
];

function Kanban() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [selectedTask, setSelectedTask] = useState(null);

  function handleCreate() {
    setModalMode("create");
    setSelectedTask(null);
    setIsModalOpen(true);
  }

  function handleEdit(task) {
    setModalMode("edit");
    setSelectedTask(task);
    setIsModalOpen(true);
    console.log(task);
  }

  function handleDeleteRequest() {
    setIsModalOpen(false);
    setIsDeleteModalOpen(true);
  }


  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <ButtonAddTask onClick={handleCreate} />
      <div className="grid grid-cols-3 gap-6">
        <Column
          type="todo"
          handleEdit={handleEdit}
          tasks={tasks.filter((task) => task.status === "todo")}
        />

        <Column
          type="progress"
          handleEdit={handleEdit}
          tasks={tasks.filter((task) => task.status === "progress")}
        />

        <Column
          type="done"
          handleEdit={handleEdit}
          tasks={tasks.filter((task) => task.status === "done")}
        />

        <TaskFormModal
          isOpen={isModalOpen}
          mode={modalMode}
          task={selectedTask}
          handleDeleteRequest = {handleDeleteRequest}
          onClose={() => setIsModalOpen(false)}
        />

        <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          console.log("CONFIRMAR DELETE");
        }}
      />

      </div>
    </main>
  );
}

export default Kanban

