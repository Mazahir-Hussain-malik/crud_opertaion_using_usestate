import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

import "./App.css";
import { data } from "autoprefixer";

function App() {
  const [Data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Edit, setEdit] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email) return alert("please fill the field");
    if (Edit) {
      const updateData = Data.map((item) => {
        return item.id == Edit.id
          ? { ...item, name: name, email: email }
          : item;
      });
      setData(updateData);
      setEdit(null);
    } else {
      setData((prev) => [
        ...prev,
        { id: Date.now(), name: name, email: email },
      ]);
    }
    setName("");
    setEmail("");
  };

  const updateTodo = (item) => {
    setEdit(item);
    setName(item.name);
    setEmail(item.email);
  };
  const deleteTodo = (id) => {
    setData((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold my-4 text-white">
          Manage your Login Page
        </h1>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter your name"
              className="border-2 w-full my-4 py-2 px-4 shadow-lg text-2xl rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter your email"
              className="border-2 w-full my-4 py-2 px-4 shadow-lg text-2xl rounded-lg "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="border-2 bg-green-500 my-4 w-full py-2 text-3xl rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
        <div>
          {Data.map((item) => {
            return (
              <>
                <ul className=" grid grid-cols-6 py-3 bg-gray-400 text-2xl my-4 rounded-lg gap-2 shadow-lg px-4 hover:bg-gray-500 text-gray-900 transition duration-150">
                  <li className="text-2xl font-semibold col-span-2">
                    {item.name}
                  </li>
                  <li className="text-2xl font-semibold col-span-2">
                    {item.email}
                  </li>
                  <li className="text-3xl text-green-700">
                    <BiEditAlt onClick={() => updateTodo(item)} />
                  </li>
                  <li className="text-3xl text-red-600 cursor-pointer">
                    {" "}
                    <MdDelete onClick={(id) => deleteTodo(item.id)} />
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
