import { ImageResponse } from '@vercel/og';
import Image from 'next/image';

export const runtime = 'edge';

const image = fetch(new URL('./image.jpg', import.meta.url)).then((res) => res.arrayBuffer());

export async function GET() {
    try {
        const imageData: any = await image;

        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        fontSize: 60,
                        letterSpacing: -2,
                        fontWeight: 700,
                        textAlign: 'center',
                        color: 'rgb(39, 59, 58)',
                    }}>
                    <Image
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                        alt={'Ross & Raquel'}
                        src={imageData}
                    />
                    <div>Ross</div>
                    <div>&</div>
                    <div>Raquel</div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
