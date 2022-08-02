package config

import (
	"fmt"
	"log"
	"net/http"

	"github.com/spf13/viper"
)

func init() {
	log.Println("Init: setting up the configuration")
	viper.AddConfigPath("./_env")
	viper.SetConfigName("env")
	viper.SetConfigType("json")

	viper.AutomaticEnv()
	err := viper.ReadInConfig()
	if err != nil {
		log.Printf("Error: on initializing config file: %s \n", err)
	} else {
		log.Println("Finished: the configuration is already use")
	}
}

func Handler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/api", http.StatusSeeOther)
}

type Configuration struct {
	SpotifyGetSavedTracksMethod     string
	SpotifyGetSavedTracksURL        string
	SpotifyAddTrackToPlaylistMethod string
	SpotifyAddTrackToPlaylistURL    string
	SpotifyOAuthToken               string
}

func NewConfiguration() Configuration {
	getSavedTracksMethod := viper.GetString("SPOTIFY_GET_SAVED_TRACKS_METHOD")
	getSavedTracksEndpoint := viper.GetString("SPOTIFY_GET_SAVED_TRACKS_ENDPOINT")
	addTrackToPlaylistMethod := viper.GetString("SPOTIFY_ADD_TRACK_TO_PLAYLIST_METHOD")
	addTrackToPlaylistEndpoint := viper.GetString("SPOTIFY_ADD_TRACK_TO_PLAYLIST_ENDPOINT")
	targetPlaylistID := viper.GetString("SPOTIFY_TARGET_PLAYLIST_ID")
	spotifyOAuthToken := viper.GetString("SPOTIFY_OAUTH_TOKEN")

	return Configuration{
		SpotifyGetSavedTracksMethod:     getSavedTracksMethod,
		SpotifyGetSavedTracksURL:        getSavedTracksEndpoint,
		SpotifyAddTrackToPlaylistMethod: addTrackToPlaylistMethod,
		SpotifyAddTrackToPlaylistURL:    fmt.Sprintf(addTrackToPlaylistEndpoint, targetPlaylistID),
		SpotifyOAuthToken:               spotifyOAuthToken,
	}
}
