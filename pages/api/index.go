package handler

import (
	"log"
	"net/http"
	"time"

	"github.com/gofiber/adaptor/v2"
	"github.com/gofiber/fiber/v2"
)

func init() {
	log.Println("Initializing...")
	defer log.Println("Completed")
}

func HealthHandler(w http.ResponseWriter, r *http.Request) {
	adaptor.FiberHandlerFunc(healthAPI)(w, r)
}

func healthAPI(c *fiber.Ctx) error {
	c.Response().Header.Set(fiber.HeaderContentType, fiber.MIMEApplicationJSONCharsetUTF8)
	log.Println("Reached: Health Check API")
	return c.JSON(fiber.Map{
		"name":      "watsize-page-api",
		"version":   "0.1.0",
		"status":    "healthy",
		"timestamp": time.Now(),
	})
}
