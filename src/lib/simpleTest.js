import supabase from './supabase.js';

async function simpleTest() {
    try {
        console.log('🔍 Testing basic Supabase connection...');

        // Test 1: Basic connection
        const { data, error } = await supabase
            .from('attendance')
            .select('*')
            .limit(1);

        if (error) {
            console.error('❌ Supabase error:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);
            return false;
        }

        console.log('✅ Supabase connection successful!');
        console.log('📊 Data returned:', data);
        console.log('📊 Data type:', typeof data);
        console.log('📊 Data length:', data ? data.length : 'null');

        return true;

    } catch (err) {
        console.error('❌ Unexpected error:', err);
        return false;
    }
}

// Run the test
simpleTest();

export default simpleTest;
