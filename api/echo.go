package handler

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gofiber/adaptor/v2"
	"github.com/gofiber/fiber/v2"
	"github.com/spf13/viper"
)

func init() {
	viper.SetConfigFile(".env")
	viper.AutomaticEnv()
	err := viper.ReadInConfig()
	if err != nil {
		log.Panicf("Fatal error config file: %s \n", err)
	}
}

func EchoHandler(w http.ResponseWriter, r *http.Request) {
	adaptor.FiberHandlerFunc(EchoAPI)(w, r)
}

func EchoAPI(c *fiber.Ctx) error {
	c.Response().Header.Set(fiber.HeaderContentType, fiber.MIMEApplicationJSONCharsetUTF8)

	log.Println("Reached: Echo API")

	config := newConfiguration()
	log.Printf("%+v\n", config)
	return c.JSON(fiber.Map{
		"spotifyGetSavedTracksURL":     config.spotifyGetSavedTracksURL,
		"spotifyAddTrackToPlaylistURL": config.spotifyAddTrackToPlaylistURL,
	})
}

type configuration struct {
	spotifyGetSavedTracksURL     string
	spotifyAddTrackToPlaylistURL string
}

func newConfiguration() configuration {
	getSavedTracksEndpoint := viper.GetString("SPOTIFY_GET_SAVED_TRACKS_ENDPOINT")
	addTrackToPlaylistEndpoint := viper.GetString("SPOTIFY_ADD_TRACK_TO_PLAYLIST_ENDPOINT")
	targetPlaylistID := viper.GetString("SPOTIFY_TARGET_PLAYLIST_ID")

	return configuration{
		spotifyGetSavedTracksURL:     getSavedTracksEndpoint,
		spotifyAddTrackToPlaylistURL: fmt.Sprintf(addTrackToPlaylistEndpoint, targetPlaylistID),
	}
}
