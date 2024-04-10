import PropTypes from "prop-types";

const SpotifyPlaylist = ({ url, hidden }) => {
  if (hidden) return null;
  return url ? (
    <div className="flex-none xl:flex-1 min-w-[320px]">
      <iframe
        src={url}
        width="100%"
        height="100%"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-xl h-20 lg:h-full"
      />
    </div>
  ) : null;
};

SpotifyPlaylist.defaultProps = {
  url: "",
  hidden: false,
};

SpotifyPlaylist.propTypes = {
  url: PropTypes.string,
  hidden: PropTypes.bool,
};

export default SpotifyPlaylist;
