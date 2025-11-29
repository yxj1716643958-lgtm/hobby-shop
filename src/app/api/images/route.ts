import { NextRequest, NextResponse } from 'next/server';
import { getMagazineImages } from '@/lib/magazineImages';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const magazine = searchParams.get('magazine');
	const issue = searchParams.get('issue');

	if (!magazine) {
		return NextResponse.json({ error: 'Magazine ID is required' }, { status: 400 });
	}

	const images = getMagazineImages(magazine, issue || undefined);

	return NextResponse.json({ images });
}
