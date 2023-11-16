import { useEffect, useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((res) => setTarefas(res));
    }
    buscarDados();
  }, []);

  return (
    <div>
      <h1>Deploy na Vercel</h1>
      <div>
        {tarefas.map((tarefa) => {
          return (
            <div className="task-container" key={tarefa.id}>
              <p className="task">
                {tarefa.id} - {tarefa.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
