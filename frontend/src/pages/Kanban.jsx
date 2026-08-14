import { useState, useEffect } from "react";
import Column from "../components/Column";
import ButtonAddTask from "../components/ButtonAddTask";
import TaskFormModal from "../components/TaskFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { getTasks,createTask,updateTask,deleteTask } from "../services/Task";

function Kanban() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [selectedTask, setSelectedTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorPage, setErrorPage] = useState(null);
  const [toast, setToast] = useState(null);
  

  function handleCreate() {
    setModalMode("create");
    setSelectedTask(null);
    setIsModalOpen(true);
  }

  function handleEdit(task) {
    setModalMode("edit");
    setSelectedTask(task);
    setIsModalOpen(true);
  }

  function handleDeleteButtonModal() {
    setIsModalOpen(false);
    setIsDeleteModalOpen(true);
  }
  function showToast(msg){
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  }
  useEffect(() => {
      async function loadTasks() {
        try {
          setLoading(true);
          setError(null);
          const data = await getTasks();
          setTasks(data);
        } catch (error) {
          setError("Não foi possível carregar as tarefas.");
        } finally {
          setLoading(false);
        }
      }

      loadTasks();
      
    }, []);

  const handleCreateTask = async (task) => {
    setErrorPage("");
    try {
      const newTask = await createTask(task);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setIsModalOpen(false);
      showToast("Tarefa salva com sucesso!");
    } catch (error) {
      setErrorPage(error.message);
    }
    
  };
  const handleEditTask = async (task) => {
    setErrorPage("");
    try {
      const updatedTask = await updateTask(task.id, task);
      setTasks((previousTasks) =>
        previousTasks.map((item) =>
          item.id === updatedTask.id ? updatedTask : item
        )
      );
      setIsModalOpen(false);
      showToast("Tarefa editada com sucesso!");
    } catch (error) {
      setErrorPage(error.message);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteTask(selectedTask.id);

      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== selectedTask.id)
      );
      setIsDeleteModalOpen(false);
      showToast("Tarefa deletada com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="flex items-center justify-center p-10">
          <p className="text-slate-500">Carregando tarefas...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="flex items-center justify-center p-10">
          <p className="text-red-500">{error}</p>
        </div>
      </main>
    );
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
          handleDeleteButtonModal={handleDeleteButtonModal}
          onClose={() => setIsModalOpen(false)}
          onSave={handleCreateTask}
          onChange={handleEditTask}
          error={errorPage}
        />

        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
        />

        {toast && (
          <div className="fixed right-6 top-6 z-50 rounded-xl bg-slate-800 px-5 py-4 text-white shadow-lg">
            {toast}
          </div>
        )}
      </div>
    </main>
    );
  }

export default Kanban

