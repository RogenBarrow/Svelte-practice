import getSummary from '../lib/dataPerMonth';

export const load = async () => {
    const totalAttendance = await getSummary();

    return {
        attendance: totalAttendance,
    };
};
