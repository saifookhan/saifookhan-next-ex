'use client'
//TODO:: WIP
import { auth, googleAuthProvider } from '../../../config/firebase'
import { signInWithPopup } from 'firebase/auth'

export default function ReviewForm() {
  const handleSignin = () => {
    signInWithPopup(auth, googleAuthProvider).then((data) => {
      console.log(data)
    })
  }

  return (
    <>
      <div className="w-full max-w-md">
        <form className="text-slate-700 mb-4 rounded-lg bg-white px-8 pb-8 pt-6 shadow-md">
          <div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 font-bold text-white"
              onClick={() => handleSignin()}
            >
              Signin with Google
            </button>
          </div>
          <div className="mb-4 mt-4">
            <label className="text-gray-700 mb-2 block text-sm font-bold">
              Name
            </label>
            <input
              className="focus:shadow-outline w-full rounded border px-3 py-2 shadow"
              placeholder="Saifoo Khan"
            />
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 font-bold text-white">
              Submit
            </button>
            <button className="bg-blue-500 rounded px-4 py-2 font-bold text-white">
              Share on Whatsapp
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
