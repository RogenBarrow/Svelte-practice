import supabase from './supabase.js';

async function basicConnectionTest() {
    try {
        console.log('🔍 Testing basic Supabase client connection...');
        
        // Test 1: Check if client is configured
        console.log('Client URL:', supabase.supabaseUrl);
        console.log('Client key length:', supabase.supabaseKey ? supabase.supabaseKey.length : 'undefined');
        
        // Test 2: Try a simple health check
        const { data, error } = await supabase
            .from('attendance')
            .select('*')
            .limit(1);
            
        if (error) {
            console.error('❌ Connection error:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);
            
            if (error.code === 'PGRST106') {
                console.error('🚨 SCHEMA CONFIGURATION ISSUE DETECTED!');
                console.error('🚨 Your Supabase project needs schema exposure configured.');
                console.error('🚨 This is NOT a code issue - it\'s a project configuration issue.');
            }
        } else {
            console.log('✅ Connection successful!');
            console.log('Data:', data);
        }
        
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

// Run the test
basicConnectionTest();

export default basicConnectionTest;
