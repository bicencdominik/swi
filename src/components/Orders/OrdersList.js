import Axios from "axios";
import React, { useEffect, useState } from "react";


function OrderList(props) {
  const [isLoading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/order/").then((result) => {
      setOrders(result.data);
      setLoading(false);
    });
  }, [isLoading]);

  function deleteOrder(id) {
    Axios.delete("http://localhost:8080/order/" + id);
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
                <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Popis</th>
            </tr>

          </thead>
          {orders.map((order) => (
            <tbody bg-white>
              <tr key={order.id}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{order.description}</div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap">
                  <button className="font-semibold text-red-600 hover:text-red-800 hover:cursor-pointer" onClick={() => deleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default OrderList;
