import supabase from "./supabase"

 async function getSupaData() {
const { data, error } = await supabase
  .from('attendance')
  .select()

  if(error) {
    throw error;
  };

//const getSupaData = data;

console.log("This is the data: ",data);
console.error("This is the error: ",error);

return data;


}

console.log("This is the function: ", getSupaData);

export default getSupaData
