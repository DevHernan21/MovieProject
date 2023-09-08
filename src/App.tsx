import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loader from './common/Loader';
import { router } from './routes/routes';
import AuthProvider from './context/AuthProvider';


function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;