<script context="module">
    import { ProgressBar } from '@skeletonlabs/skeleton';
    import fetchDataForSum from './server/database/getDataforSum';
    import sumTotalAmountByMonth from '$lib/sumFunction';
    import { onMount } from 'svelte';

    async function filterData() {
        try {
            // Fetch data asynchronously and await the result
            const sumTotalPromise = fetchDataForSum();

            // Wait for the sumTotalPromise to resolve to get the actual value
            const sumTotal = await sumTotalPromise;

            console.log('sumTotal: ', sumTotal);

            // Now that sumTotal is an array, you can pass it to another function
            const result = sumTotalAmountByMonth(sumTotal);

            console.log('Its this: ', result);
            return result;
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
        }
    }

    const result = await filterData();
    console.log('This is the result: ', result);
</script>

<script lang="ts">
    // Define a type for the monthlyData object
    type MonthlyData = {
        January: number;
        February: number;
        March: number;
        April: number;
        May: number;
        June: number;
        July: number;
        August: number;
        September: number;
        October: number;
        November: number;
        December: number;
    };

    // Initialize the monthly data object
    let monthlyData: MonthlyData = {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
    };

    // Map the result object to monthlyData
    onMount(async () => {
        const result = await filterData();
        console.log('result in the mount: ', result);

        if (result) {
            for (const [key, value] of Object.entries(result)) {
                const [year, month] = key.split('-');
                const monthIndex = parseInt(month) - 1;
                const date = new Date(parseInt(year), monthIndex, 1);
                const monthName = date.toLocaleString('default', {
                    month: 'long',
                });
                monthlyData[monthName] = value;
                console.log('The months: ', monthName);
                console.log('The values are here', value);
            }
        }
    });

    // Map the result object to monthlyData based on selected year
    function mapResultToMonthlyData(selectedYear: number) {
        monthlyData = {
            January: 0,
            February: 0,
            March: 0,
            April: 0,
            May: 0,
            June: 0,
            July: 0,
            August: 0,
            September: 0,
            October: 0,
            November: 0,
            December: 0,
        };

        if (result) {
            for (const [key, value] of Object.entries(result)) {
                const [year, month] = key.split('-').map(Number);
                if (year === selectedYear) {
                    const monthIndex = month - 1; // Months are 0-indexed in JavaScript Date objects
                    const date = new Date(year, monthIndex, 1); // Set the date to the 1st day of the month
                    const monthName = date.toLocaleString('default', {
                        month: 'long',
                    });
                    monthlyData[monthName] = value;
                }
            }
        }
    }

    // Handle the change event of the select input
    function handleYearChange(event: Event) {
        const selectedYear = parseInt(
            (event.target as HTMLSelectElement).value
        );
        mapResultToMonthlyData(selectedYear);
    }

    onMount(async () => {
        result = await filterData();
        console.log('result in the mount: ', result);
    });
</script>

<div class="flex flex-col">
    <div class="flex flex-col items-center m-2">
        <div class="w-6/12 justify-center">
            <select class="select" on:change={handleYearChange}>
                <option value="">Select Year</option>
                {#each [2023, 2024, 2025] as year}
                    <option value={year}>{year}</option>
                {/each}
            </select>
        </div>
    </div>

    {#if Object.keys(monthlyData).length > 0}
        <div class="flex flex-col">
            {#each Object.entries(monthlyData) as [month, value]}
                <div class="flex flex-col items-center m-2">
                    <div class="w-6/12 justify-center">
                        <p>{month}</p>
                        <p class="content-right">{value}</p>
                        <!-- Adjust max based on expected data range -->
                        <ProgressBar {value} max={1200} />
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <p>No data available for the selected year.</p>
    {/if}
</div>
