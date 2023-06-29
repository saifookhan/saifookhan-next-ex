//TODO:: WIP

import { Collapse, CollapseProps, Typography } from 'antd'
import React from 'react'

import videoList from '../../constants/germany/videoList'
const { Link, Text } = Typography

const VideosListCollapse = () => {
  const itemsNew = videoList.map((chapter, count) => {
    return {
      key: count,
      label: `${chapter.chapter} - ${chapter.chapterName}`,
      children: (
        <>
          <Text>{chapter.description}</Text>
          <div className="my-2">
            <Collapse
              defaultActiveKey="0"
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

  return (
    <div>
      <Collapse
        items={itemsNew}
        defaultActiveKey={['0']}
        // onChange={onChange}
      />
    </div>
  )
}

export default VideosListCollapse
