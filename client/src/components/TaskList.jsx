import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";


export function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {

        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data);
        }

        loadTasks();

    }, []);

    return (
        <div>
            {tasks.length == 0 &&
                <div className="flex justify-center mt-80">
                    <div className="text-3xl">No se encontro ninguna tarea</div>
                </div>
                ||

                <div className="grid grid-cols-3 gap-3">
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
    
                </div>
            }

        </div>
    )
}
