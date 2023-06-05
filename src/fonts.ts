import { Inter, Montserrat, Sacramento, Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
export const workSans = Work_Sans({
    subsets: ['latin'],
    variable: '--font-work-sans',
});

export const sacramento = Sacramento({
    weight: ['400'],
    subsets: ['latin-ext'],
    variable: '--font-sacramento',
});

export const betterSaturday = localFont({
    src: './styles/fonts/better_saturday.woff2',
    variable: '--font-better-saturday',
});

export const montserrat = Montserrat({
    subsets: ['latin-ext'],
    variable: '--font-montserrat',
});
