import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const magazine = searchParams.get('magazine');
	const issue = searchParams.get('issue');

	if (!magazine) {
		return NextResponse.json({ error: 'Magazine parameter required' }, { status: 400 });
	}

	let folderPath: string;

	if (magazine === '1') {
		// 十周年特刊
		folderPath = path.join(process.cwd(), 'public', 'magazines', '10th-anniversary');
	} else if (magazine === '2') {
		// 2024年月刊
		if (!issue) {
			return NextResponse.json({ error: 'Issue parameter required for 2024' }, { status: 400 });
		}
		folderPath = path.join(process.cwd(), 'public', 'magazines', '2024', issue);
	} else if (magazine === '3') {
		// 2025年月刊
		if (!issue) {
			return NextResponse.json({ error: 'Issue parameter required for 2025' }, { status: 400 });
		}
		folderPath = path.join(process.cwd(), 'public', 'magazines', '2025', issue);
	} else {
		return NextResponse.json({ error: 'Invalid magazine ID' }, { status: 400 });
	}

	try {
		if (!fs.existsSync(folderPath)) {
			return NextResponse.json({ images: [] });
		}

		const files = fs.readdirSync(folderPath);
		const imageFiles = files
			.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
			.sort((a, b) => {
				// 尝试按数字排序
				const numA = parseInt(a.match(/\d+/)?.[0] || '0');
				const numB = parseInt(b.match(/\d+/)?.[0] || '0');
				return numA - numB;
			})
			.map(file => {
				if (magazine === '1') {
					return `/magazines/10th-anniversary/${file}`;
				} else if (magazine === '2') {
					return `/magazines/2024/${issue}/${file}`;
				} else {
					return `/magazines/2025/${issue}/${file}`;
				}
			});

		return NextResponse.json({ images: imageFiles });
	} catch (error) {
		console.error('Error reading directory:', error);
		return NextResponse.json({ error: 'Failed to read images' }, { status: 500 });
	}
}
