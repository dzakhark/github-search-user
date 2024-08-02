import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router'
import Loading from './components/shared/Loading';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-xl text-center font-bold">GitHub Users Search Tool</h1>
        </div>
      </header>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>

    </div>
  )
}

export default App
