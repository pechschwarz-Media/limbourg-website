import { GravityFormsResponse } from '@/lib/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const formData = await req.json();

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gf/v2/forms/${formData?.form}/submissions`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${btoa(`${process.env.API_PUBLIC}:${process.env.API_SECRET}`)}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData.data),
        });

        const data = (await response.json()) as GravityFormsResponse;

        console.log(JSON.stringify(data, null, 2));

        if (!data.is_valid) {
            return NextResponse.json({ status: false });
        }

        return NextResponse.json({ status: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: false }, { status: 500 });
    }
}
