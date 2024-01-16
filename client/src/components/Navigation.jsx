import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Task App</h1>
      </Link>
      <button className="bg-indigo-700 px-3 py-2 hover:bg-indigo-800 hover:cursor-pointer">
        <Link to="/tasks-create">Create task</Link>
      </button>
    </div>
  )
}
