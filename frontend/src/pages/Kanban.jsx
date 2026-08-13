import Column from "../components/Column";
import ButtonAddTask from "../components/ButtonAddTask";

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
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <ButtonAddTask onClick={() => console.log("Abrir modal")} />
      <div className="grid grid-cols-3 gap-6">
        <Column
          type="todo"
          tasks={tasks.filter((task) => task.status === "todo")}
        />

        <Column
          type="progress"
          tasks={tasks.filter((task) => task.status === "progress")}
        />

        <Column
          type="done"
          tasks={tasks.filter((task) => task.status === "done")}
        />
      </div>
    </main>
  );
}

export default Kanban

