import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'limbourg-backend.pechschwarz.dev',
                port: '',
            },
        ],
        deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2500],
        imageSizes: [640, 768, 1024, 1280, 1536, 1920, 2500],
    },
    async redirects() {
        return [
            {
                source: '/news/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/erfolgreiche-rezertifizierung-durch-mybody-2014-2015-2/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/5-tipps-gegen-trockene-haut-im-winter/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/bodylift-nach-lockwood/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/breastimplantillness-bii-oder-asia-autoimmune-inflammatory-syndrome-inducedbyadjuvants/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/die-geschichte-der-brustvergroesserung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/die-narbe-nach-einem-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/die-richtige-nachsorge-nach-einem-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/die-vorteile-der-makrotexturierten-implantate/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/die-wiederherstellung-der-brust-nach-einer-krebserkrankung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/drooping-nose-tip/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/faq-halslift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/faltenbehandlung-durch-unterspritzung-mit-hyaluronsaeure/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/fettabsaugung-liposuktion-ueberblick-und-methoden/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/fettabsaugung-oder-bauchdeckenstraffung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/gesichtstraffung-facelift-und-fadenlift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/haarausfall-bei-frauen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/haeufige-fragen-zum-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/haeufige-fragen-zur-oberlidkorrektur/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/haeufige-fragen-zur-unterspritzung-mit-hyaluronsaeure/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/heilen-narben-besser-im-sommer-oder-im-winter/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/hinter-den-kulissen-einer-op/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/hyaluronsaeure-behandlung-gegen-falten-und-fuer-volumen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/kein-facelift-ohne-halsstraffung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/kinnimplantate/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/komplikationen-und-nebenwirkungen-beim-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/kryolipolyse-fett-weg-durch-kaelte/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/langzeitwirkungen-von-hyaluronsaeure/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/mini-facelift-und-midfacelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/morphing-software-zur-operationsplanung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/mythen-ueber-die-plastische-chirurgie/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nachsorge-nach-einer-fettabsaugung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/narbentherapie/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nasenatmungsstoerung-und-septumdeviation/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nasenkorrektur-ueberblick-und-methoden/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nicht-operative-behandlung-von-narben/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nutzen-und-grenzen-der-hyaluronsaeure/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/operationen-im-ausland/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/opinformationen-zum-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/opvorbereitung-zum-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/plastische-und-aesthetische-chirurgie/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/postoperative-gesichtspflege-nach-einem-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/radiofrequenz-und-ultraschall/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/schwitzen-vermeiden-nach-unterspritzung-mit-hyaluronsaeure/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/sonneneinstrahlung-nach-facelift/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/unterlidkorrektur/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/wann-darf-ich-nach-einer-unterspritzung-wieder-sport-machen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
