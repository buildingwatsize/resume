import Head from 'next/head'

const defaults = {
  title: 'Watsize Pages',
}

const Header = (props = defaults) => {
  const {
    title
  } = props
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header
