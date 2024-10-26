import { Outlet } from "react-router-dom";

export default function App() {
  // testing
  return (
    <h1 className="text-3xl font-bold underline">
      <Outlet />
    </h1>
  )
}