import PropTypes from 'prop-types'

const SpotifyPlaylist = ({ url, hidden }) => {
  if (hidden) return null
  return url ? <iframe style={{ borderRadius: "12px" }} src={url} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" /> : null
}

SpotifyPlaylist.defaultProps = {
  url: "",
  hidden: false,
}

SpotifyPlaylist.propTypes = {
  url: PropTypes.string,
  hidden: PropTypes.bool,
}

export default SpotifyPlaylist