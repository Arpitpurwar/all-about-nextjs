import courses from './data.json';
import { NextResponse } from 'next/server';

export async function GET(){
    return NextResponse.json(courses);
}

export async function POST(){
    const course = request.json();
    console.log(course);
    return NextResponse.json({message : 'Course created'});
}