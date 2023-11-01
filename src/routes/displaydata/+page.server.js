import getSupaData from '$lib/supabaseData';



export const load = async () => {
    
    const data = await getSupaData();

    console.log("The data in the load function: ", data);
    
      return {
          information: {
              content: data,
            }
        }
        
    };
    
    