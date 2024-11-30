import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Item {
  itemName: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

const ViewDetails: React.FC = () => {
  const [item, setItem] = useState<Item | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Check if id is defined before attempting to fetch item
    if (id !== undefined) {
      const storedItems: Item[] = JSON.parse(localStorage.getItem('items') || '[]');
      const selectedItem = storedItems[Number(id)]; // Use Number to convert the id to an index
      setItem(selectedItem || null);
    }
  }, [id]);

  if (!item) {
    return (
      <div className="text-center mt-20 text-lg text-gray-600">
        <p>Item not found or invalid index.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Item Details</h1>

      <div className="mb-6">
        {item.images.length > 0 ? (
          <img
            src={item.images[0]}
            alt={item.itemName}
            className="w-full h-80 object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-md">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">{item.itemName}</h2>
      <p className="text-lg text-gray-600 mt-2">{item.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-blue-600">${item.price}</span>
        <span className="text-lg text-gray-500">{item.category}</span>
      </div>

      {item.images.length > 1 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Additional Images</h3>
          <div className="flex space-x-4 mt-4">
            {item.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Item Preview ${index + 1}`}
                className="w-32 h-32 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      )}

      <button
        className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ViewDetails;
