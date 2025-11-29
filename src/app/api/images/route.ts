import { NextRequest, NextResponse } from 'next/server';
import { getMagazineImages } from '@/lib/magazineImages';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const magazine = searchParams.get('magazine');
	const issue = searchParams.get('issue');

	if (!magazine) {
		return NextResponse.json({ error: 'Magazine parameter required' }, { status: 400 });
	}

	try {
		const images = getMagazineImages(magazine, issue || undefined);
		return NextResponse.json({ images });
	} catch (error) {
		console.error('Error getting images:', error);
		return NextResponse.json({ error: 'Failed to get images' }, { status: 500 });
	}
}
