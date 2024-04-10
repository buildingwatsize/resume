import Personalities from "components/Contents/Hobbies/Personalities";
import SpotifyPlaylist from "components/Contents/Hobbies/SpotifyPlaylist";
import TopicLayout from "components/Layout/TopicLayout";

const Hobbies = () => {
  // const playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl?utm_source=generator" // Your Top Songs 2021 Playlist
  // const playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZEVXcGihww3c6WeH?utm_source=generator" // Discovery Weekly
  const playlistURL =
    "https://open.spotify.com/embed/playlist/4QQCfuOzaIgxctmKXhA8KT?utm_source=generator"; // Watsize's Liked Songs
  return (
    <TopicLayout id="hobbies" title="What we are the same?">
      <div className="w-full flex justify-between gap-4 flex-col lg:flex-row lg:w-4/5">
        <SpotifyPlaylist url={playlistURL} />
        <Personalities />
      </div>
    </TopicLayout>
  );
};

export default Hobbies;
