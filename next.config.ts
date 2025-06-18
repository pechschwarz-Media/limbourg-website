import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.dr-limbourg.de',
                port: '',
            },
        ],
        deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2500],
        imageSizes: [640, 768, 1024, 1280, 1536, 1920, 2500],
    },
    async redirects() {
        return [
            { source: '/news/', destination: 'https://www.dr-limbourg.de/blog/', permanent: true },
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
                source: '/news/alles-ueber-neuen-beautytrend-kinnkorrektur/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nasenkorrektur-von-meg-ryan/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/micro-needling-mit-dermaroller/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/behandlung-maennlicher-brustkrebs-gynaekomastie/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/hohe-qualitaet-der-sophienklinik/',
                destination: 'https://www.dr-limbourg.de/blog/hohe-qualitaet-der-sophienklinik/',
                permanent: true,
            },
            {
                source: '/news/top-mediziner-fuer-brustchirurgie-2020-dr-meyer-gattermann-erhaelt-wiederholt-das-renommierte-focus-siegel/',
                destination:
                    'https://www.dr-limbourg.de/blog/top-mediziner-fuer-brustchirurgie-2020-dr-meyer-gattermann-erhaelt-wiederholt-das-renommierte-focus-siegel/',
                permanent: true,
            },
            {
                source: '/news/hannover-lifestyle-magazin-cityglow-berichtet-ueber-dr-meyer-gattermann/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/trendwende-brustverkleinerung-warum-eine-verkleinerung-sinnvoll-ist/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/lifting-mit-faeden-neustes-beauty-verfahren-bringt-frische-ins-gesicht/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/labienplastik-erfolgreiche-methoden-zur-verkleinerung-grosser-schamlippen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/gesichtsfalten-behandeln-interview/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/discover-germany-veroeffentlicht-artikel-ueber-die-praxis-dr-meyer-gattermann/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/top-mediziner-fuer-brustchirurgie-2021-auch-in-diesem-jahr-erhaelt-dr-med-meyer-gattermann-das-renommierte-focus-siegel/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/frau-dr-limbourg-ist-jetzt-mitglied-der-vdaepc/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/mikrodermabrasion-fuer-perfektes-hautbild/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/top-mediziner-fuer-brustchirurgie-2019-dr-meyer-gattermann-erhaelt-wiederholt-das-renommierte-focus-siegel/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/4d-simulation-augmented-reality-beratung-bei-brustvergroesserungen-betrachten-sie-ihr-neues-ich-live-in-einem-spiegel/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/aktuelle-trends-der-aesthetisch-plastischen-chirurgie/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/falten-zwischen-mund-und-nase-entfernen-so-funktionierts/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/wie-kann-am-effektivsten-ein-volles-lippenrot-erreicht-werden/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            { source: '/news/trends-behandlungen/', destination: 'https://www.dr-limbourg.de/blog/', permanent: true },
            {
                source: '/news/steigende-nachfrage-nach-bruststraffungen-mastopexien/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/radiowellentherapie-als-neuer-schoenheitstipp-fuers-gesicht-skin-refacing-mit-sanften-radiowellen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/eingriffszahlen-der-aesthetisch-plastischen-operation-nehmen-zu-fettabsaugung-weiterhin-auf-platz-eins/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/steigende-nachfrage-lipofilling-in-deutschland-weiter-auf-vormarsch/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/qualitaet-vor-preis-vorsicht-vor-billigangeboten-bei-brustvergroesserungen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/getrieben-vom-preiswettbewerb-brustvergroesserungen-zum-dumpingpreis/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/lippenverschoenerung-nach-mass-welche-lippengroesse-ist-ideal-fuer-eine-frau/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/fettabsaugen-wann-liposuktion-sinnvoll/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/schoenheitsoperation-vorbereitung-beratungsgespraech-facharzt/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nasenkorrektur-rhinoplastik/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/wie-finden-richtigen-schoenheitschirurgen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/2-x-10-tipps-zur-vorbereitung-auf-schoenheitsoperation/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/fuenf-faltenbehandlungen-vom-profi-welche-richtige-faltentherapie-fuer-hautverjuengung-ist/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/faltenfreie-schoenheit-megan-fox-macht-es/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/faltenkorrektur-von-sharon-stone/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/beautytrend-koerperstraffung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/eigenfetttransplantation-in-hannover-fuer-schoene-koerperformen/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/beautytrend-sanfte-aesthetik-ist/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/tipps-fuer-gesunde-haut/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/aqualix-fett-weg-spritze/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/brustoperation-video-eigenfett/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/halsstraffung-zur-wiederherstellung-der-jugendlichen-halskontur/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/frisches-aussehen-und-jugendliche-ausstrahlung-ohne-skalpell/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/welches-ziel-hat-ein-facelifting/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/gruende-fuer-eine-nasenkorrektur/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/gruende-fuer-eine-bruststraffung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/vorteile-der-brustimplantatentfernung-en-bloc/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/brustverkleinerung-im-alter/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/brustaufbau-mit-eigenfett-nach-brustkrebs-bessere-lebensqualitaet-als-implantate/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/spezielle-filler-fuer-bestimmte-regionen-filler-ist-nicht-gleich-filler/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/sie-wuenschen-sich-eine-beratung-am-samstag/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            {
                source: '/news/nachsorge-brustvergroesserung/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },
            { source: '/news/body-lift/', destination: 'https://www.dr-limbourg.de/blog/', permanent: true },
            {
                source: '/news/ihre-nasenoperation-in-hannover/',
                destination: 'https://www.dr-limbourg.de/blog/',
                permanent: true,
            },

            // Sonstige Weiterleitungen
            { source: '/home-2/', destination: 'https://www.dr-limbourg.de/', permanent: true },

            // Behandlungen & Praxisseiten
            {
                source: '/behandlungen/koerper/flankenlift/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/bodylift/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/lippen-aufspritzen/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/lippenbehandlung/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/ohrenkorrektur/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/brazilian-butt-lift/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/fett-weg-spritze/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/oberarmstraffung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/oberschenkel-postraffung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/schamhuegelstraffung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/intimchirurgie/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/schamlippenvergroesserung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/intimchirurgie/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/schamlippenverkleinerung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/intimchirurgie/',
                permanent: true,
            },
            {
                source: '/behandlungen/koerper/schweissdruesenabsaugung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/koerper/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/eigenfett-transfer/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/eigenfett-transfer/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/faltenbehandlung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/botox/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/fadenlift/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/fadenlifting/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/faltenunterspritzung/',
                destination:
                    'https://www.dr-limbourg.de/behandlungen/falten-und-haut/faltenbehandlung-mit-hyaluronsaeure/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/problemzonen/',
                destination:
                    'https://www.dr-limbourg.de/behandlungen/falten-und-haut/faltenbehandlung-mit-hyaluronsaeure/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/vampirlifting/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/vampirlifting/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/radiowellentherapie/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/zornesfalten-stirnfalten/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/zornes-stirnfalten/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/lippenlifting-durch-bullhorn-exzision/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/lippenbehandlung/',
                permanent: true,
            },
            {
                source: '/behandlungen-fuer-maenner/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/faltenbehandlung-fuer-maenner/',
                permanent: true,
            },
            {
                source: '/behandlungen-fuer-frauen/',
                destination: 'https://www.dr-limbourg.de/behandlungen/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/lp-fadenlift/',
                destination: 'https://dr-limbourg.de/behandlungen/falten-und-haut/fadenlifting/',
                permanent: true,
            },

            // Ärzteteam
            {
                source: '/aerzteteam/dr-med-kerstin-zindel/',
                destination: 'https://www.dr-limbourg.de/praxis/dr-kerstin-zindel/',
                permanent: true,
            },
            {
                source: '/aerzteteam/wilko-ruether/',
                destination: 'https://www.dr-limbourg.de/praxis/',
                permanent: true,
            },
            {
                source: '/aerzteteam/dr-med-w-meyer-gattermann/',
                destination: 'https://www.dr-limbourg.de/praxis/dr-med-werner-meyer-gattermann/',
                permanent: true,
            },
            {
                source: '/aerzteteam/priv-doz-dr-med-anne-limbourg/',
                destination: 'https://www.dr-limbourg.de/praxis/dr-anne-limbourg/',
                permanent: true,
            },
            { source: '/aerzteteam/', destination: 'https://www.dr-limbourg.de/praxis/', permanent: true },

            // Brust-Behandlungen
            {
                source: '/behandlungen/brust/brustimplantatwechsel/',
                destination: 'https://www.dr-limbourg.de/behandlungen/brust/brustimplantate-wechseln/',
                permanent: true,
            },
            {
                source: '/behandlungen/brust/brustvergroesserung-eigenfett/',
                destination: 'https://www.dr-limbourg.de/behandlungen/brust/brustvergroesserung-mit-eigenfett/',
                permanent: true,
            },
            {
                source: '/behandlungen/brust/brustwarzenkorrektur/',
                destination: 'https://www.dr-limbourg.de/behandlungen/brust/korrektur-von-brustfehlbildungen/',
                permanent: true,
            },
            {
                source: '/behandlungen/brust/gynaekomastie-maennerbrust/',
                destination: 'https://www.dr-limbourg.de/behandlungen/brust/gynaekomastie/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/stirn-brauenlift/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/halsstraffung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/halsstraffung/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/nasolabialfalten-hannover/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/nasolabialfalten/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/faltenbehandlung/maenner/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/faltenbehandlung-fuer-maenner/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/midfacelift/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/facelift/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/kinnkorrektur/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/botox/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/botox/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/lidstraffung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/lidstraffung/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/facelift/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/facelift/',
                permanent: true,
            },
            {
                source: '/behandlungen/falten/augenringe-augenfalten/',
                destination: 'https://www.dr-limbourg.de/behandlungen/falten-und-haut/augenringe-und-augenfalten/',
                permanent: true,
            },
            {
                source: '/behandlungen/brust/brustvergroesserung/',
                destination: 'https://www.dr-limbourg.de/behandlungen/brust/brustvergroesserung-mit-implantaten/',
                permanent: true,
            },
            {
                source: '/behandlungen/brust/brustvergroesserung/brustimplantate/',
                destination: 'https://www.dr-limbourg.de/behandlungen/brust/brustvergroesserung-mit-implantaten/',
                permanent: true,
            },
            {
                source: '/behandlungen/gesicht/nasen-op/',
                destination: 'https://www.dr-limbourg.de/behandlungen/gesicht-und-hals/nasenkorrektur/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
