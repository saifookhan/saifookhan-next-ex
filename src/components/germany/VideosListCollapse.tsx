//TODO:: WIP

import { Collapse, Typography } from 'antd'
import React from 'react'

import videoList from '../../constants/germany/videoList'
const { Link, Text } = Typography

const VideosListCollapse = () => {
  const itemsNew = videoList
    .map((chapter, count) => {
      return {
        key: count,
        label: `${chapter.chapter} - ${chapter.chapterName}`,
        children: (
          <>
            <Text>{chapter.description}</Text>
            <div className="my-2">
              <Collapse
                defaultActiveKey="03"
                items={chapter.videos.map((video, innerCount) => {
                  return {
                    key: String(count) + innerCount,
                    label: `${innerCount} - ${video.title}`,
                    children: (
                      <div>
                        <iframe
                          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                          src={video.embedHtml}
                        />

                        <Text italic className="mt-2">
                          Click{' '}
                          <Link href={video.videoLink} target="_blank">
                            here
                          </Link>{' '}
                          to open in a new tab.
                        </Text>
                      </div>
                    ),
                  }
                })}
              />
            </div>
          </>
        ),
      }
    })
    .concat({
      key: 55,
      label: `05 - Request videos here:`,
      children: (
        <>
          <Text>
            Click{' '}
            <Link
              href="https://wa.me/00923362452699?text=Hi+Team+Saifoo%2C+Please+create+a+video+on+topic%3A+"
              target="_blank"
            >
              here
            </Link>{' '}
            to send a Whatsapp Message 🚀
          </Text>
        </>
      ),
    })

  return (
    <div>
      <Collapse items={itemsNew} defaultActiveKey={['0']} />
    </div>
  )
}

export default VideosListCollapse
