'use client'

import Button from '@/components/ui/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 to-pink-900 h-[100vh]">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            <img src="\Untitled-removebg-preview.png" alt="Your Company Logo"  className="h-[250px] w-auto" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full flex items-center justify-center text-white font-bold py-3 px-4 rounded-lg transition duration-300 hover:bg-slate-950"
            onClick={loginWithGoogle}
          >
            <span className="text-lg">Google</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page
