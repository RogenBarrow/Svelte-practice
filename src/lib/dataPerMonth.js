import calculateTotalAmount from './amount';
import filterDataByMonth from './components/month';
import supabase from './supabase';

async function getSummary() {
    try {
        const { data, error } = await supabase.from('attendance').select('date,amount');

        // Check for errors first
        if (error) {
            console.error('Supabase error:', error);
            throw error;
        }

        // Check if data is null or empty
        if (!data || data.length === 0) {
            console.log('No data returned from attendance table');
            return '0';
        }

        const d = new Date();
        const strDate = d.toJSON();

        let month = strDate.substr(5, 2);
        const numberfy = Number(month);
        //console.log(strDate);
        //console.log("month: ", numberfy);

        const result = filterDataByMonth(data, numberfy)

        //console.log("there result of filter: ",result);

        const totalAmountOfAttandace = calculateTotalAmount(result);

        const totalAttendance = JSON.stringify(totalAmountOfAttandace);

        console.log("check this: ", totalAmountOfAttandace)

        return totalAttendance;
    } catch (error) {
        console.error('Error in getSummary:', error);
        throw error;
    }
}

console.log('This is the function: ', getSummary);

export default getSummary;

