import TopicLayout from 'components/Layout/TopicLayout'

const Attention = () => {
  return (
    <TopicLayout id="attention" title='What we are the same?'>
      <SpotifyPlaylist />
    </TopicLayout>
  )
}

const SpotifyPlaylist = () => {
  return <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
}

export default Attention