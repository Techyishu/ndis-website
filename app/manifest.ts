import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'EverCare Community',
        short_name: 'EverCare',
        description: 'Leading NDIS provider in Melbourne and Victoria offering compassionate, nurse-led disability support services.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FDFCFA',
        theme_color: '#026189',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
