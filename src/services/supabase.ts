import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jgwlhtohnepagbktuoxw.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnd2xodG9obmVwYWdia3R1b3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3NDU1MDAsImV4cCI6MjAwMzMyMTUwMH0.du3WjXkTHgniHlQ3cpzwWDbLhAvC4H0Zb53rQqBdby8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
