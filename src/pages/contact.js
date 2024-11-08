import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            setSuccess('');
            return;
        }

        setSuccess('Your message has been sent successfully!');
        setError('');

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="max-w-screen-sm mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>

            {error && <div className="bg-red-200 text-red-800 p-3 rounded mb-4">{error}</div>}
            {success && <div className="bg-green-200 text-green-800 p-3 rounded mb-4">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                        rows="4"
                        required
                    />
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-500 transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
