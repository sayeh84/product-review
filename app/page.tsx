'use client'

import ProductReview from './ProductReview /review'
import Sign from '@/app/Sign/sign'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function HomePage() {
  const { data: session, status } = useSession()

  // ✅ Hantera laddningsstatus för sessionen
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500">Laddar...</p>
      </div>
    )
  }

  // ✅ Om användaren är inloggad
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
        <div className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 border border-gray-100 space-x-4">
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Inloggad som</p>
            <Sign email={session.user?.email} />
          </div>

          <button
            onClick={() => signOut()}
            className="ml-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-md 
                     hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg 
                     active:scale-95 transition-all duration-200 ease-in-out"
          >
            Logga ut
          </button>
        </div>

        <ProductReview />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6 w-full max-w-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Inte inloggad</h1>
        <p className="text-gray-500 text-center">
          Logga in för att komma åt ditt konto och spara dina inställningar.
        </p>
        <button
          onClick={() => signIn('google')}
          className="flex items-center justify-center space-x-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-5 py-3 rounded-xl shadow-sm transition duration-200 w-full"
        >
          <FcGoogle size={24} />
          <span>Logga in med Google</span>
        </button>
      </div>
    </div>
  )
}
