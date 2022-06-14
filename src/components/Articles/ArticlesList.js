import Axios from "axios";
import React, { useEffect, useState } from "react";


function ArticlesList(props) {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/article/").then((result) => {
        setArticles(result.data);
      setLoading(false);
    });
  }, [isLoading]);

  function deleteArticle(id) {
    Axios.delete("http://localhost:8080/article/" + id);
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
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Název</th>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">množství</th>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Cena za jednotku</th>
              <th className="text-left font-medium text-gray-700 uppercase tracking-wider py-4 px-6">Jednotka</th>
            </tr>
            </thead>
          {articles.map((article) => (
            <tbody bg-white>
              <tr key={article.id}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{article.name}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{article.amount}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-left px-6 py-4 whitespace-nowrap">{article.pricePerUnit}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-left px-6 py-4 whitespace-nowrap">{article.unit}</div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap">
                  <button className="font-semibold text-red-600 hover:text-red-800 hover:cursor-pointer" onClick={() => deleteArticle(article.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ArticlesList;
