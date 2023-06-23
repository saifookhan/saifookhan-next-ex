import Image from 'next/image'
//TODO:: WIP
export default function ReviewCard() {
  return (
    <>
      <div className="bg-slate-100 dark:bg-slate-800 min-w-[300px] rounded-xl p-8 md:flex md:p-0">
        <Image
          className="mx-auto h-24 w-24 rounded-full"
          src="/sarah-dayan.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="space-y-4 pt-6 text-center md:p-8">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that Ive seen scale on large
              teams. Its easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </div>
    </>
  )
}
