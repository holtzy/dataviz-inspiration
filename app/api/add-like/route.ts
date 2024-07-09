import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

// Write a new like number for a specific project in the DB
export async function POST(req: NextRequest) {
    const { projectId, likeNumber } = await req.json();

    try {
        const result = await sql`UPDATE "likedb" SET "numberoflikes" = ${likeNumber} WHERE "projectid" = ${projectId};`
        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Error executing query', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
