import calculateTotalAmount from './amount';
import filterDataByMonth from './components/month';
import supabase from './supabase';

async function getSummary() {

    
    const { data, error } = await supabase.from('attendance').select('date,amount');

    const d = new Date();
    const strDate = d.toJSON();

    let month = strDate.substr(5, 2);
    const numberfy = Number(month);
    //console.log(strDate);
    //console.log("month: ", numberfy);

    
    const result = filterDataByMonth(data, numberfy)

    //console.log("there result of filter: ",result);

    const totalAmountOfAttandace = calculateTotalAmount(result);

    const totalAttendance = JSON.stringify( totalAmountOfAttandace);

    console.log("check this: ",totalAmountOfAttandace)

    if (error) {
        throw error;
    }


    return totalAttendance;
    
}

console.log('This is the function: ', getSummary);

export default getSummary;

