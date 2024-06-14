<script context="module">
    import { ProgressBar } from '@skeletonlabs/skeleton';
    import fetchDataForSum from './server/database/getDataforSum';
    import sumTotalAmountByMonth from '$lib/sumFunction';
    import { onMount } from 'svelte';

    async function filterData() {
        try {
            const sumTotal = await fetchDataForSum();
            const result = sumTotalAmountByMonth(sumTotal);
            return result;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
</script>

<script lang="ts">
    import { writable } from 'svelte/store';

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

    const result = writable<Record<string, number> | null>(null);

    onMount(async () => {
        const data = await filterData();
        if (data) {
            result.set(data);
            updateMonthlyData(data);
        }
    });

    function updateMonthlyData(
        data: Record<string, number>,
        selectedYear?: number
    ) {
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

        for (const [key, value] of Object.entries(data)) {
            const [year, month] = key.split('-').map(Number);
            if (!selectedYear || year === selectedYear) {
                const monthIndex = month - 1;
                const date = new Date(year, monthIndex, 1);
                const monthName = date.toLocaleString('default', {
                    month: 'long',
                });
                monthlyData[monthName] += value;
            }
        }
    }

    function handleYearChange(event: Event) {
        const selectedYear = parseInt(
            (event.target as HTMLSelectElement).value
        );
        if (selectedYear) {
            result.subscribe((data) => {
                if (data) {
                    updateMonthlyData(data, selectedYear);
                }
            });
        } else {
            result.subscribe((data) => {
                if (data) {
                    updateMonthlyData(data);
                }
            });
        }
    }
</script>

<div class="flex flex-col">
    <div class="flex flex-col items-center m-2">
        <div class="w-6/12 justify-center">
            <select class="select" on:change={handleYearChange}>
                <option value="">Select Year</option>
                {#each [2024, 2025, 2026] as year}
                    <option value={year}>{year}</option>
                {/each}
            </select>
        </div>
    </div>

    {#if Object.keys(monthlyData).some((key) => monthlyData[key] > 0)}
        <div class="flex flex-col">
            {#each Object.entries(monthlyData) as [month, value]}
                <div class="flex flex-col items-center m-2">
                    <div class="w-6/12 justify-center">
                        <p>{month}</p>
                        <p class="content-right">{value}</p>
                        <ProgressBar {value} max={1200} />
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <div class="flex flex-col items-center m-2">
            <div class="w-6/12 justify-center">
                <p>No data available for the selected year.</p>
            </div>
        </div>
    {/if}
</div>
