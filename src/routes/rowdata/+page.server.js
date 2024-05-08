import getSummary from "../lib/dataPerMonth";

export const load = async () => {
    const totalAttendance = await getSummary();

    console.log("Total: ",totalAttendance);
    return {
        attendance: totalAttendance,

    };
};
