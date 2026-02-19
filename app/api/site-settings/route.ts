import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const group = searchParams.get('group');

    let query = supabase
      .from('site_settings')
      .select('*')
      .order('key', { ascending: true });

    if (group) {
      query = query.eq('group', group);
    }

    const { data, error } = await query;
    if (error) throw error;

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // body can be a single setting or an array of settings
    const settings = Array.isArray(body) ? body : [body];

    const upsertData = settings.map((s: { key: string; value: string; group: string }) => ({
      key: s.key,
      value: s.value,
      group: s.group,
      updated_at: new Date().toISOString(),
    }));

    const { data, error } = await supabase
      .from('site_settings')
      .upsert(upsertData, { onConflict: 'key' })
      .select();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, value, group } = body;

    const { data, error } = await supabase
      .from('site_settings')
      .upsert({ key, value, group, updated_at: new Date().toISOString() }, { onConflict: 'key' })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
