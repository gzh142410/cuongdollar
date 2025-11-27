import '@/assets/css/index.css';
import MetaLogoImage from '@/assets/images/meta-logo-image.png';
import DisableDevtool from '@/components/disable-devtool';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
config.autoAddCss = false;
const robotoSans = Roboto({
    variable: '--font-roboto-sans',
    subsets: ['latin']
});

const robotoMono = Roboto_Mono({
    variable: '--font-roboto-mono',
    subsets: ['latin']
});

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
    title: 'Meta Agency Partner Program - Page Appeal',
    description: 'Your agency has been selected as a qualified candidate to participate in the Meta Agency Partner Program. This invitation gives you access to exclusive tools, premium support, and growth opportunities.',
    openGraph: {
        title: 'Meta Agency Partner Program - Page Appeal',
        description: 'Your agency has been selected as a qualified candidate to participate in the Meta Agency Partner Program.',
        images: [
            {
                url: MetaLogoImage.src,
                width: 1200,
                height: 630,
                alt: 'Meta Agency Partner Program'
            }
        ],
        type: 'website',
        locale: 'en_US'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meta Agency Partner Program - Page Appeal',
        description: 'Your agency has been selected as a qualified candidate to participate in the Meta Agency Partner Program.',
        images: [MetaLogoImage.src]
    },
    icons: {
        icon: '/favicon.ico'
    }
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' data-scroll-behavior='smooth'>
            <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
                <DisableDevtool />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
