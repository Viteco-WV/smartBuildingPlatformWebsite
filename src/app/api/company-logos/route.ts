import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const logosDir = path.join(process.cwd(), 'public/company-logos');
  let files: string[] = [];
  try {
    files = fs.readdirSync(logosDir).filter(f => f.match(/\.(svg|png|jpg|jpeg)$/i));
  } catch (e) {
    // map bestaat niet of is leeg
  }
  return NextResponse.json(files);
} 