import supabase from "./supabase"


const { data, error } = await supabase
  .from('attendance')
  .select()

  if(error) {
    throw error;
  };

const getSupaData = data;

console.log("This is the data: ",getSupaData);
console.error("This is the error: ",error);

export default getSupaData
