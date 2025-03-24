import type {
    MetadataRoute
} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Coffee Shop',
        short_name: 'Coffee Shop',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: 'icons/coffee-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/coffee-256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: ' /icons/coffee-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}