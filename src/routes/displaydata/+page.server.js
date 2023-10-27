import getSupaData from '$lib/supabaseData';


const data = await getSupaData();

export const load = () => {
    

    console.log("The data in the load function: ", data);
    
      return {
          information: {
              content: data,
            }
        }
        
    };
    
    