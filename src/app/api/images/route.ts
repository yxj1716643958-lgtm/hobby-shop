import { NextRequest, NextResponse } from 'next/server';
import { magazineImages } from '@/lib/magazineImages';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const magazine = searchParams.get('magazine');
	const issue = searchParams.get('issue');

	if (!magazine) {
		return NextResponse.json({ error: 'Magazine ID is required' }, { status: 400 });
	}

	const key = issue ? `${magazine}-${issue}` : magazine;
	const images = magazineImages[key] || [];

	return NextResponse.json({ images });
}
