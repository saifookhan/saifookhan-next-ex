//TODO:: WIP
'use client'
import { Button, Collapse, ConfigProvider, theme } from 'antd'

import ReviewCard from '@/components/germany/ReviewCard'
import ReviewForm from '@/components/germany/ReviewForm'

import fakeReviews from '../../../tmp/googleSigninReturn.json'
import VideosList from '@/components/germany/VideosList'

export default function GermanyPage() {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            fontFamily: 'Inter',
          },
        }}
      >
        <div className="mx-auto px-4 sm:container">
          <div className="p-4 text-center">
            <p className=" text-6xl font-black md:text-7xl">
              Your Gateway to Germamy/EU🇩🇪🇪🇺
            </p>
            <p className="p-4">
              Apply for work/study without any consultants for and save your
              money. 🇵🇰🇮🇳🇧🇩{' '}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <VideosList />
          </div>
          <div>
            <p className="my-4	p-4 text-center text-2xl font-black">
              Community Reviews
            </p>
            <span className="md flex flex-row gap-4 overflow-x-auto">
              {fakeReviews.map((review) => {
                return <ReviewCard key={review.providerId} />
              })}
            </span>
          </div>
        </div>

        <div className="min-w-full max-w-xs">
          <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block text-sm font-bold">
                Username
              </label>
              <input
                className="focus:shadow-outline text-gray-700 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="text-gray-700 mb-2 block text-sm font-bold">
                Password
              </label>
              <input
                className="focus:shadow-outline border-red-500 text-gray-700 mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 font-bold text-white focus:outline-none"
                type="button"
              >
                Sign In
              </button>
              <a
                className="text-blue-500 hover:text-blue-800 inline-block align-baseline text-sm font-bold"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-gray-500 text-center text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>

        <ReviewForm />
      </ConfigProvider>
    </>
  )
}
