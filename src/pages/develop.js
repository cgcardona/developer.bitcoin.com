// @flow

import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import InfoCard from 'components/InfoCard'
import HelmetPlus from 'components/HelmetPlus'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import media from 'styles/media'
import spacing from 'styles/spacing'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const CardLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

type Props = {
  location: Object,
  data: { heroImage: any },
}

const DevelopPage = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Develop - ${data.site.siteMetadata.title}`}
      description={
        'Development hub for all your development needs to be successful on Bitcoin Cash (BCH)'
      }
      keywords={[
        'develop on bitcoin',
        'develop on bitcoin cash',
        'bitcoin cash resources',
      ]}
      location={location}
    />
    <Hero image={data.heroImage}>
      <HeroLayout>
        <H1 background>Develop on Bitcoin Cash</H1>
        <H3 primary thin>
          Help bring financial sovereignty to the world
        </H3>
      </HeroLayout>
    </Hero>
    <Container>
      <CardLayout>
        <InfoCard
          to="/bitbox"
          title="BITBOX"
          text="Fully featured javascript framework. Offering utility methods for Mnemonics, HDNodes, ECPairs, Crypto, Address conversion, Transactions and much more."
          cta="View"
        />
        <InfoCard
          to="/badger"
          title="Badger"
          text="Your gateway to the Bitcoin Cash (BCH) ecosystem. Integrate your app with with the Bitcoin Cash blockchain, without the complexity."
          cta="View"
        />
        <InfoCard
          to="/rest"
          title="REST"
          text="The BCH JSON RPC over HTTP including a fully documented and interactive GUI which developers can use to test their ideas and confirm their code is making proper API calls."
          cta="View"
        />
        <InfoCard
          to="/slp"
          title="SLP"
          text="Tokenize anything. Everything you need to easily issue, spend or trade your own token."
          cta="View"
        />
        <InfoCard
          to="/cashscript/docs/getting-started"
          title="CashScript"
          text="Create contracts and complex spending scripts on Bitcoin Cash. Everything you need to write cash contracts and easily integrate them into your applications."
          cta="View"
        />
        <InfoCard
          to="/gui"
          title="GUI"
          text="BIP44 development wallet. Convert between cashaddr/legacy addresses. Create QR codes for WIF, XPub and XPrivs. Sign and verify messages."
          cta="View"
        />
        <InfoCard
          to="/faucets"
          title="Faucets"
          text="Testnet BCH for developers."
          cta="View"
        />
        <InfoCard
          title="Cloud"
          text="Blockchain-as-a-Service. Infrastructure to deploy and scale your apps. An ecosystem of add-ons for data, monitoring, logging, metrics, testing and more all built w/ BITBOX."
          disabledcta="Coming soon"
        />
        <InfoCard
          title="Market"
          text="Paid downloads, streaming media, in-app purchases, tokens and more ways for you to monetize."
          disabledcta="Coming soon"
        />
      </CardLayout>
    </Container>
  </DefaultLayout>
)

export default DevelopPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "hero-develop.jpg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f9b016", shadow: "#191919" }
          maxWidth: 2000
          quality: 85
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
