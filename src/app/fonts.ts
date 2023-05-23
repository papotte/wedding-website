import { Inter, Sacramento, Work_Sans } from 'next/font/google';

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
