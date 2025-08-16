import supabase from './supabase.js';

async function testSchemaAccess() {
    try {
        console.log('🔍 Testing schema access...');

        // Test 1: Try to access information_schema (should always work)
        const { data: schemaData, error: schemaError } = await supabase
            .rpc('get_schemas');

        if (schemaError) {
            console.error('❌ Schema access error:', schemaError);
        } else {
            console.log('✅ Schema access works:', schemaData);
        }

        // Test 2: Try a simple table query
        const { data, error } = await supabase
            .from('attendance')
            .select('count')
            .limit(1);

        if (error) {
            console.error('❌ Table access error:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);

            if (error.code === 'PGRST106') {
                console.error('🚨 This is a schema configuration issue!');
                console.error('🚨 Your Supabase project needs schema exposure configured.');
            }
        } else {
            console.log('✅ Table access works:', data);
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

// Run the test
testSchemaAccess();

export default testSchemaAccess;
