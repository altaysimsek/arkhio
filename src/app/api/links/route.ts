
import { NextResponse } from 'next/server'
import fsPromises from 'fs/promises';
import path from 'path'

export async function GET(request: Request) {

    const filePath = path.join(process.cwd(), 'src/json/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return NextResponse.json(objectData)
}