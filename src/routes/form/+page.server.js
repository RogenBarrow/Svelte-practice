import sumOfAll from '$lib/sum.js';
import supabase from '$lib/supabase';
import { fail } from '@sveltejs/kit';

const todayDate = new Date();

export const actions = {
    default: async ({ request }) => {
        try {
            const insertData = await request.formData();
            const obj = Object.fromEntries(insertData.entries());

            // Input validation
            const actDate = obj.date?.toString();
            const actNumber = parseInt(obj.number?.toString() || '0');
            const actNumberKids = parseInt(obj.numberkids?.toString() || '0');
            const actNumberKidsleaders = parseInt(obj.numberkidsleaders?.toString() || '0');
            const actName = obj.name?.toString().trim();
            const actRate = obj.accurate;

            // Validation checks
            if (!actDate) {
                return fail(400, { error: 'Date is required' });
            }

            if (isNaN(actNumber) || actNumber < 0) {
                return fail(400, { error: 'Valid attendance number is required' });
            }

            if (isNaN(actNumberKids) || actNumberKids < 0) {
                return fail(400, { error: 'Valid kids attendance number is required' });
            }

            if (isNaN(actNumberKidsleaders) || actNumberKidsleaders < 0) {
                return fail(400, { error: 'Valid kids leaders attendance number is required' });
            }

            if (!actName || actName.length < 2) {
                return fail(400, { error: 'Valid submitter name is required' });
            }

            if (!actRate) {
                return fail(400, { error: 'Please confirm accuracy' });
            }

            const amount = sumOfAll(actNumber.toString(), actNumberKids.toString(), actNumberKidsleaders.toString());

            const { error } = await supabase.from('attendancetest').insert({
                date: actDate,
                amount: actNumber,
                amount_kids: actNumberKids,
                amount_kids_leader: actNumberKidsleaders,
                total_amount: amount,
                name: actName,
                accurate: actRate,
            });

            if (error) {
                return fail(500, { error: 'Failed to save data' });
            }

            return { success: true, message: 'Attendance data saved successfully' };
        } catch (error) {
            return fail(500, { error: 'Internal server error' });
        }
    },
};
