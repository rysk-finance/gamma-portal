import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'react-grid-system'
import BoxButton from '../../components/BoxButton'
import { Header, IconUser, IconConfiguration, IconSwap } from '@aragon/ui'

import Comment from '../../components/Comment'
import SectionTitle from '../../components/SectionHeader'
import StyledContainer from '../../components/StyledContainer'

const opynLogo = require('../../imgs/icons/opyn.png')

function HomePage() {
  const history = useHistory()
  useEffect(() => ReactGA.pageview('/'), [])
  return (
    <StyledContainer>
      <Header primary="Gamma Portal" />

      <Comment padding={0} text="Create, manage and trade decentralized options" />

      <SectionTitle title={'Core'} />
      <Row>
        <Col sm={12} md={6} lg={4}>
          <BoxButton
            title="Account"
            description="Manage vaults and positions"
            icon={<IconUser size="large" />}
            onClick={() => {
              history.push('/account/')
            }}
          />
        </Col>

        <Col sm={12} md={6} lg={4}>
          <BoxButton
            title="Protocol"
            description="Protocol configs"
            icon={<IconConfiguration size="large" />}
            onClick={() => {
              history.push('/protocol/')
            }}
          />
        </Col>

        <Col sm={12} md={6} lg={4}>
          <BoxButton
            title="Trade"
            description="Trade with 0x"
            icon={<IconSwap size="large" />}
            onClick={() => {
              history.push('/trade/')
            }}
          />
        </Col>
      </Row>

      <SectionTitle title={'Applications'} />
      <Row>
        <Col sm={12} md={6} lg={4}>
          <BoxButton
            title="Rysk Finance"
            description="Dynamic hedging vault"
            icon={<img height={24} style={{ margin: 13 }} src={opynLogo} alt={'opyn official'} />}
            onClick={() => {
              window.open('https://rysk.finance', '_blank')
            }}
          />
        </Col>
      </Row>
    </StyledContainer>
  )
}

export default HomePage
