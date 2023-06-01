import React from 'react'
import BgImage from 'assets/images/gateway-bg.png'

import { DaoProps } from './types'
import { DaoAction } from './DaoAction'
import Proposals from './Proposals'
import {
  DaoPage,
  PageBackgroundImg,
  PageDescription,
  PageHead,
  PageTitle,
} from './styles'

const Dao: React.FC<DaoProps> = (props) => {
  return (
    <DaoPage>
      <PageBackgroundImg src={BgImage} alt="bg texture" />

      <PageHead>
        <PageTitle>Dao</PageTitle>
        <PageDescription>
          Participate in voting on proposals concerning the future of Boba
          Network
        </PageDescription>
      </PageHead>

      <DaoAction />
      <Proposals />
    </DaoPage>
  )
}

export default Dao
