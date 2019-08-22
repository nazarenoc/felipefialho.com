import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import { getActiveTheme } from 'utils'
import DateTime from 'components/DateTime'
import BoxHandler from 'components/BoxHandler'
import Tags from 'components/Tags'

import * as S from './styled'

const trackClick = (item) => {
  ReactGA.event({
    category: 'Blog',
    action: 'click',
    label: `Blog List - Go to ${item}`
  })
}

const BlogPost = ({
  slug,
  date,
  timeToRead,
  title,
  tags,
  description
}) => {
  return (
    <S.BlogPost
      to={`/${slug}`}
      cover
      direction="bottom"
      bg={getActiveTheme()}
      onClick={trackClick(title)}>
        <BoxHandler>
          <Tags tags={tags} />
          <DateTime>
            {date}
            {timeToRead && (
              <span> · Leitura de {timeToRead} min</span>
            )}
          </DateTime>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{description}</S.Subtitle>
        </BoxHandler>
    </S.BlogPost>
  )
}

BlogPost.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.node.isRequired,
}

export default BlogPost