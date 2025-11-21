import Image from 'next/image'
import ProductReview from './ProductReview /review'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function Home() {
  const { data: session, status } = useSession()

  // ✅ Hantera laddningsstatus för sessionen
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500">Laddar...</p>
      </div>
    )
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ProductReview />
    </div>
  )
}
