import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/TTS/',
  plugins: [VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Text To Speech',
        short_name: 'TTS',
        description: 'A text to speech converter',
        background_color: 'black', 
        display: 'standalone', 
        start_url: '/TTS',
        scope: '/',
        orientation: 'portrait',
        theme_color: 'purple',
        icons: [
		{
			src: "pwa-64x64.png",
			sizes: "64x64",
			type: "image/png"
		},
		{
			src: "pwa-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
  		{
    			src: "pwa-512x512.png",
    			sizes: "512x512",
    			type: "image/png"
  		},
  		{
    			src: "maskable-icon-512x512.png",
    			sizes: "512x512",
    			type: "image/png",
    			purpose: "maskable"
  		}
	]
      }
  })
  ],
});