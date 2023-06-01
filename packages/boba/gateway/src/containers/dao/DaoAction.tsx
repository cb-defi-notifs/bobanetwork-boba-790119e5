import React from 'react'
import { DaoActionContainer } from './styles'
import { DaoActionProps } from './types'
import Button from 'components/button/Button'

export const DaoAction: React.FC<DaoActionProps> = (props) => {
  return (
    <DaoActionContainer>
      <p>
        <b>Balance</b>
      </p>

      <div>
        <p>Boba</p>
        <p>0 BOBA</p>
      </div>
      <div>
        <p>xBoba</p>
        <p>0 xBoba</p>
      </div>

      <button>Delegate Boba</button>
      <button>Create Proposal</button>
    </DaoActionContainer>
  )
}
