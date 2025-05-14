import calculateTotalAmount from './amount';
import filterDataByMonth from './components/month';
import supabase from './supabase';

async function getSummary() {
    try {
        const { data, error } = await supabase.from('attendance').select('date,amount');

        if (error) {
            console.error('Supabase error:', error);
            throw error;
        }

        if (!data) {
            console.log('No data returned from Supabase');
            return 0;
        }

        const d = new Date();
        const strDate = d.toJSON();
        let month = strDate.substr(5, 2);
        const numberfy = Number(month);

        const result = filterDataByMonth(data, numberfy);
        const totalAmountOfAttandace = calculateTotalAmount(result);
        const totalAttendance = JSON.stringify(totalAmountOfAttandace);

        console.log("check this: ", totalAmountOfAttandace);
        return totalAmountOfAttandace;
    } catch (err) {
        console.error('Error in getSummary:', err);
        return 0;
    }
}

console.log('This is the function: ', getSummary);

export default getSummary;

