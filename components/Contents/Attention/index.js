import Col from 'components/Flex/Col'
import Row from 'components/Flex/Row'
import TopicLayout from 'components/Layout/TopicLayout'
import SpotifyPlaylist from './SpotifyPlaylist'

const Attention = () => {
  // const playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl?utm_source=generator" // Your Top Songs 2021 Playlist
  // const playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZEVXcGihww3c6WeH?utm_source=generator" // Discovery Weekly
  const playlistURL = "https://open.spotify.com/embed/playlist/4QQCfuOzaIgxctmKXhA8KT?utm_source=generator" // Watsize's Liked Songs
  return (
    <TopicLayout id="attention" title='What we are the same?'>
      <Row className="w-full">
        <Col span={12} sm={6}>
          <SpotifyPlaylist url={playlistURL} />
        </Col>
        <Col span={12} sm={6}>
          <div className="bg-medium-blue/20 rounded-md shadow-md py-4 px-2 h-full">
            <div>Sci-fi Movies</div>
            <div>Action, Shooting, and Strategy Gaming</div>
          </div>
        </Col>
      </Row>
    </TopicLayout>
  )
}

export default Attention