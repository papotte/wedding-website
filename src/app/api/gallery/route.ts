import { NextResponse } from 'next/server';

import fs from 'fs';
import { join, resolve } from 'path';

const dirRelativeToPublicFolder = 'images/gallery';

export async function GET() {
    const dir = resolve(join(process.cwd(), 'public/' + dirRelativeToPublicFolder));

    const filenames = fs.readdirSync(dir);

    const images = filenames.map((name, index) => {
        return { path: join('/', dirRelativeToPublicFolder, name), id: index, name };
    });
    return NextResponse.json(images);
}
