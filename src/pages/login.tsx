import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const router = useRouter();

    const predefinedEmail = 'user@example.com';
    const predefinedPassword = 'password123';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in both fields.');
            setSuccess('');
            return;
        }

        if (email === predefinedEmail && password === predefinedPassword) {
            setSuccess('Login successful!');
            setError('');
            router.push('/');
        } else {
            setError('Invalid email or password.');
            setSuccess('');
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <div className="max-w-screen-sm mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

            {error && <div className="bg-red-200 text-red-800 p-3 rounded mb-4">{error}</div>}
            {success && <div className="bg-green-200 text-green-800 p-3 rounded mb-4">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-500 transition-colors"
                    >
                        Log In
                    </button>
                </div>
            </form>

            <div className="text-center">
                <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/register">
                        <a className="text-blue-600 hover:underline">Register here</a>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
