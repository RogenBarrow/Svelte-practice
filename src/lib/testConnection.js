import supabase from './supabase.js';

async function testConnection() {
    try {
        console.log('Testing Supabase connection...');
        
        // Test basic connection
        const { data, error } = await supabase
            .from('attendance')
            .select('*')
            .limit(1);
            
        if (error) {
            console.error('Supabase error:', error);
            return false;
        }
        
        console.log('✅ Supabase connection successful!');
        console.log('Data returned:', data);
        return true;
        
    } catch (err) {
        console.error('❌ Connection test failed:', err);
        return false;
    }
}

// Run the test
testConnection();

export default testConnection;
