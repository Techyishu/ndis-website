import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, inquiryType, message } = body;

    if (!fullName || !email || !phone || !inquiryType || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('contact_form_submissions')
      .insert([{
        full_name: fullName,
        email,
        phone,
        inquiry_type: inquiryType,
        message,
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ 
        error: error.message || 'Failed to submit form',
        details: error 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      error: error.message || 'Failed to submit form',
      details: error.toString()
    }, { status: 500 });
  }
}

