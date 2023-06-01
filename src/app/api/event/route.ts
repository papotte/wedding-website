import { NextResponse } from 'next/server';

import { eventData } from '@utils/eventData';

export async function GET() {
    return NextResponse.json(eventData);
}
