import courses from '../data.json';
import { NextResponse } from 'next/server';

export async function GET(request){
    const {searchParams} = new URL(request.url);
    const query = searchParams.get('query');
    const filteredCourse = courses.filter((course)=>{
        return course.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredCourse);
}