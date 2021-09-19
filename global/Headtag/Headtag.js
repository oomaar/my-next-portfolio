import Head from "next/head";

export const Headtag = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

            {/* Google-Font: Grechen Fuemen & Poppins */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Grechen+Fuemen&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
        </Head>
    );
};