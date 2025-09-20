<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import fetchDataForSum from './server/database/getDataforSum';
    import sumTotalAmountByMonth from '$lib/sumFunction';

    let canvasEl: HTMLCanvasElement | null = null;
    let chart: Chart | null = null;
    let dataByMonth: Record<string, number> = {};
    const availableYears = [2024, 2025, 2026];
    let selectedYear = availableYears[0];
    let hasDataForYear = false;

    async function loadData() {
        const rawData = await fetchDataForSum();
        dataByMonth = sumTotalAmountByMonth(rawData);
        renderChart();
    }

    function renderChart() {
        if (!canvasEl) return;

        const months = Array.from({ length: 12 }, (_, index) => {
            const monthNumber = index + 1;
            const key = `${selectedYear}-${String(monthNumber).padStart(
                2,
                '0'
            )}`;
            return {
                key,
                label: new Date(selectedYear, index, 1).toLocaleString(
                    'default',
                    { month: 'long' }
                ),
                value: dataByMonth[key] ?? 0,
            };
        });

        hasDataForYear = months.some((month) => month.value > 0);

        chart?.destroy();

        const labels = months.map(({ label }) => label);
        const values = months.map(({ value }) => value);

        chart = new Chart(canvasEl, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: `Attendance ${selectedYear}`,
                        data: values,
                        backgroundColor: '#60a5fa',
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    function handleYearChange(event: Event) {
        const value = Number((event.target as HTMLSelectElement).value);
        if (!Number.isNaN(value)) {
            selectedYear = value;
            renderChart();
        }
    }

    onMount(loadData);
    onDestroy(() => {
        chart?.destroy();
    });
</script>

<div class="flex flex-col items-center gap-4 mt-5">
    <select
        class="select w-full max-w-xs"
        aria-label="Select year"
        on:change={handleYearChange}
    >
        {#each availableYears as year}
            <option value={year} selected={year === selectedYear}>
                {year}
            </option>
        {/each}
    </select>

    <div class="w-full max-w-2xl aspect-[4/3]">
        <canvas bind:this={canvasEl}></canvas>
    </div>

    {#if !hasDataForYear}
        <p class="text-sm text-gray-500">
            No data available for the selected year.
        </p>
    {/if}
</div>
