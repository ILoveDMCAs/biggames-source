import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <meta nes="" name="keywords" content="big games, roblox, video games, pet simulator, pet sim" />
                <meta nes="" name="robots" content="index, follow" />
                <meta
                    nes=""
                    name="description"
                    content="Indie game studio behind several massively popular Roblox games available across all devices."
                />
                <meta nes="" httpEquiv="content-language" content="en-US" />
                <meta nes="" property="og:title" content="BIG Games" />
                <meta
                    nes=""
                    property="og:description"
                    content="Indie game studio behind several massively popular Roblox games available across all devices."
                />
                <meta nes="" property="og:type" content="website" />
                <meta
                    nes=""
                    property="og:image"
                    content="https://static.wixstatic.com/media/81ec46_da31c6dfe511436690214229d3bd20fa~mv2.png/v1/fill/w_845,h_670,al_c/81ec46_da31c6dfe511436690214229d3bd20fa~mv2.png"
                />
                <meta nes="" property="og:url" content="https://www.biggames.io" />
                <meta nes="" property="og:locale" content="en-US" />
                <meta nes="" property="og:site_name" content="biggames.io" />
                <meta nes="" name="twitter:card" content="summary_large_image" />
                <meta nes="" name="twitter:site" content="@BuildIntoGames" />
                <meta nes="" name="twitter:creator" content="@BuildIntoGames" />
                <meta nes="" name="twitter:title" content="BIG Games" />
                <meta
                    nes=""
                    name="twitter:description"
                    content="Indie game studio behind several massively popular Roblox games available across all devices."
                />
                <meta
                    nes=""
                    name="twitter:image"
                    content="https://static.wixstatic.com/media/81ec46_da31c6dfe511436690214229d3bd20fa~mv2.png/v1/fill/w_845,h_670,al_c/81ec46_da31c6dfe511436690214229d3bd20fa~mv2.png"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="icon" href="public/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Flow+Rounded&family=Outfit:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <div id="portal" />
            </body>
        </Html>
    );
}
