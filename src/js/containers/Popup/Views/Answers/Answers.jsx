import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@material-ui/core/Typography'

import { Intro, View } from '../views.styled'

function AnswersView() {
  const { t } = useTranslation()

  return (
    <View className="hide-scrollbar">
      <Intro>
        <img
          src="/images/search-files.svg"
          alt="Search answers"
          width="160"
          height="130"
        />
        <Typography component="h1" variant="h6">
          {t('searchTitle')}
        </Typography>
        <Typography component="p" variant="body2">
          {t('searchIntro')}
        </Typography>
      </Intro>
    </View>
  )
}

AnswersView.propTypes = {}

export default AnswersView