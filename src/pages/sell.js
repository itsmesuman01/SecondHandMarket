import { useState, useEffect } from 'react';

const Sell = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setImages(storedItems);
    }
  }, []);

  const handleImageChange = (e) => {
    const fileArray = Array.from(e.target.files);

    if (images.length + fileArray.length > 5) {
      setError('You can upload a maximum of 5 images.');
      return;
    }

    const imagePromises = fileArray.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)
      .then((encodedImages) => {
        const updatedImages = [...images, ...encodedImages];
        setImages(updatedImages);
        localStorage.setItem('images', JSON.stringify(updatedImages));
      })
      .catch((err) => {
        setError('Error uploading images. Please try again.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !description || !price || !category || images.length === 0) {
      setError('Please fill in all fields and upload at least one image.');
      return;
    }

    if (parseFloat(price) <= 0) {
      setError('Please provide a valid price.');
      return;
    }

    const newItem = {
      itemName,
      description,
      price,
      category,
      images,
    };

    const existingItems = JSON.parse(localStorage.getItem('items')) || [];

    existingItems.push(newItem);

    localStorage.setItem('items', JSON.stringify(existingItems));

    setItemName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImages([]);
    setError(null);
  };

  return (
    <div className="max-w-screen-sm mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Sell Your Item</h1>

      {error && <div className="bg-red-200 text-red-800 p-3 rounded mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="itemName" className="block text-lg font-medium text-gray-700">
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-lg font-medium text-gray-700">
            Price (in USD)
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
            min="1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="toys">Toys</option>
            <option value="appliances">Appliances</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-lg font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700">Uploaded Images</h3>
          <div className="flex space-x-4 mt-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Uploaded Preview ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-500 transition-colors"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sell;
