//TODO:: WIP
'use client'
import { ConfigProvider, theme, Typography } from 'antd'

import VideosListCollapse from '@/components/germany/VideosListCollapse'
import SocialIcons from '@/components/germany/SocialIcons'

const { Link } = Typography

const footerLinks = [
  {
    link: 'https://instagram.com/saifooexplores',
    linkText: 'Instagram',
  },
  {
    link: 'https://facebook.com/saifooexplores',
    linkText: 'Facebook Page',
  },
  {
    link: 'https://linkedin.com/in/saifookhan',
    linkText: 'Linkedin',
  },
  {
    link: 'https://instagram.com/saifoomatches',
    linkText: 'Get Married',
  },
]

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
            <p className=" text-4xl font-black md:text-7xl">
              Your Gateway to Germamy/EU🇩🇪🇪🇺
            </p>
            <p className="p-4">
              Apply for work/study without any consultants for and save your
              money. 🇵🇰🇮🇳🇧🇩{' '}
            </p>
          </div>
          <div className="grid gap-4 ">
            <p className="my-1	px-4 text-center text-2xl font-bold">
              JOIN OUR SUPPORT GROUPS
            </p>
            <SocialIcons />
          </div>
          <div className="grid gap-4 ">
            <p className="mt-8	px-4 text-center text-2xl font-bold">
              STEP-BY-STEP VIDEOS
            </p>
            <VideosListCollapse />
          </div>
          <div>
            <p className="my-4	p-4 text-center text-2xl font-black">
              FOLLOW SAIFOO ON SOCIALS
            </p>
            <span className="md flex flex-row gap-4 overflow-x-auto">
              {footerLinks.map((link) => {
                return (
                  <Link href={link.link} target="_blank">
                    <p>{link.linkText}</p>
                  </Link>
                )
              })}
            </span>
          </div>
        </div>

        {/* <ReviewForm /> */}
      </ConfigProvider>
    </>
  )
}
