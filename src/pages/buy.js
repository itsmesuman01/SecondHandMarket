import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Buy = () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleViewDetails = (index) => {
    router.push(`/view/${index}`);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Browse Items for Sale</h1>
      {items.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No items available for sale.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                {item.images.length > 0 ? (
                  <img
                    src={item.images[0]}
                    alt={`Item Preview ${index + 1}`}
                    className="w-full h-48 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.itemName}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-blue-600">${item.price}</span>
                <span className="text-sm text-gray-500">{item.category}</span>
              </div>
              <button
                onClick={() => handleViewDetails(index)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Buy;
