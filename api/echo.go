package handler

import (
	"log"
	"net/http"

	"watsize-page-api/config"

	"github.com/gofiber/adaptor/v2"
	"github.com/gofiber/fiber/v2"
	"github.com/spf13/viper"
)

func init() {
	viper.AddConfigPath("./_env")
	viper.SetConfigName("env")
	viper.SetConfigType("json")

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

	conf := config.NewConfiguration()
	log.Printf("%+v\n", conf)
	return c.JSON(fiber.Map{
		"SpotifyGetSavedTracksMethod":     conf.SpotifyGetSavedTracksMethod,
		"SpotifyGetSavedTracksURL":        conf.SpotifyGetSavedTracksURL,
		"SpotifyAddTrackToPlaylistMethod": conf.SpotifyAddTrackToPlaylistMethod,
		"SpotifyAddTrackToPlaylistURL":    conf.SpotifyAddTrackToPlaylistURL,
		"SpotifyOAuthToken":               conf.SpotifyOAuthToken[0:3] + "XXX" + conf.SpotifyOAuthToken[len(conf.SpotifyOAuthToken)-3:],
	})
}
