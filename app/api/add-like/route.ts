import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');
    const numberOfLikes = searchParams.get('numberOfLikes');

    try {
        if (!projectId || !numberOfLikes) throw new Error('ProjectId and Number of Like required');
        await sql`INSERT INTO projectid (projectid, numberoflikes) VALUES (${projectId}, ${numberOfLikes});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const database = await sql`SELECT * FROM projectid;`;
    return NextResponse.json({ database }, { status: 200 });
}


// http://localhost:3000/api/add-like?projectId=4&numberOfLikes=9
