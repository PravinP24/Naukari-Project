// src/components/AdminLogin.tsx
import React, { useState } from 'react';

interface LoginFormState {
   adminEmail: string;
   adminPassword: string;
}

const AdminLogin: React.FC = () => {
   const [formState, setFormState] = useState<LoginFormState>({
      adminEmail: '',
      adminPassword: ''
   });

   const [error, setError] = useState<string | null>(null);
   const [showPassword, setShowPassword] = useState<boolean>(false);

   // Handle input changes
   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    const { id, value } = e.target;
   //    setFormState((prevState) => ({
   //       ...prevState,
   //       [id]: value
   //    }));
   // };

   // Handle form submission
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const { adminEmail, adminPassword } = formState;

      // Basic validation
      if (!adminEmail || !adminPassword) {
         setError('Both fields are required.');
         return;
      }

      // Typically, you would handle form submission here
      console.log('Admin Email:', adminEmail);
      console.log('Admin Password:', adminPassword);

      // Reset error on successful submit
      setError(null);
   };

   // Toggle password visibility
   const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Login</h2>
            {error && (
               <div className="mb-4 p-3 bg-red-100 text-red-800 border border-red-300 rounded-md">
                  {error}
               </div>
            )}

            <form onSubmit={handleSubmit}>


               <div className="mb-4">
                  <label htmlFor="adminEmail" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                  <input
                     type="email"
                     id="adminEmail"
                     value={formState.adminEmail}
                     onChange={(e) => setFormState({ ...formState, adminEmail: e.target.value })}
                     className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Enter your email"
                     required
                  />
               </div>
               
               <div className="mb-6 relative">
                  <label htmlFor="adminPassword" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                  <input
                     type={showPassword ? 'text' : 'password'}
                     id="adminPassword"
                     value={formState.adminPassword}
                     onChange={(e) => setFormState({ ...formState, adminPassword: e.target.value })}
                     className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Enter your password"
                     required
                  />
                  <button
                     type="button"
                     onClick={togglePasswordVisibility}
                     className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                     aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                     {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9 9 9-9-9-9-9 9z" />
                        </svg>
                     ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12l9 9 9-9-9-9-9 9z" />
                        </svg>
                     )}
                  </button>
               </div>
               

               <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
               >
                  Login
               </button>
            </form>
         </div>
      </div>
   );
};

export default AdminLogin;