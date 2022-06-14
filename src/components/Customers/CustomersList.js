import Axios from "axios";
import React, { useEffect, useState } from "react";


function CustomerList(props) {
  const [isLoading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/customer/").then((result) => {
      setCustomers(result.data);
      setLoading(false);
    });
  }, [isLoading]);

  function deleteCustomer(id) {
    Axios.delete("http://localhost:8080/customer/" + id);
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
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Adresa</th>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Tel. Číslo</th>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Poznámka</th>
            </tr>
            </thead>
          {customers.map((customer) => (
            <tbody bg-white>
              <tr key={customer.id}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{customer.name}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{customer.adress}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-left px-6 py-4 whitespace-nowrap">{customer.phoneNumber}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-left px-6 py-4 whitespace-nowrap">{customer.note}</div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap">
                  <button className="font-semibold text-red-600 hover:text-red-800 hover:cursor-pointer" onClick={() => deleteCustomer(customer.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
