import Axios from "axios";
import React, { useEffect, useState } from "react";


function WorkerList(props) {
  const [isLoading, setLoading] = useState(true);
  const [workers, setWorker] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/worker/").then((result) => {
      setWorker(result.data);
      setLoading(false);
    });
  }, [isLoading]);

  function deleteWorker(id) {
    Axios.delete("http://localhost:8080/worker/" + id);
    setLoading(true);
  }
  

  

  if (isLoading){
    return <section>
      <p>Loading...</p>
    </section>
  }


  return (
    <div className="container mx-auto my-5">
      <div className="flex shadow border-b border-green-400">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Jméno</th>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Příjmení</th>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Věk</th>
            </tr>
          </thead>
          {workers.map((worker) => (
            <tbody bg-white>
              <tr key={worker.id}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{worker.name}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{worker.surname}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-left px-6 py-4 whitespace-nowrap">{worker.age}</div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap">
                  <button className="font-semibold text-red-600 hover:text-red-800 hover:cursor-pointer" onClick={() => deleteWorker(worker.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default WorkerList;
