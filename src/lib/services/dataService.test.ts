import { describe, it, expect, vi } from 'vitest';
import { DataService } from './dataService';

describe('DataService.deleteRecord', () => {
    it('calls fetch with the correct URL and method', async () => {
        const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: vi.fn() });
        const originalFetch = global.fetch;
        // @ts-ignore
        global.fetch = mockFetch;

        await DataService.deleteRecord(123);

        expect(mockFetch).toHaveBeenCalledWith('/api/deleteRowId/123', {
            method: 'DELETE'
        });

        // restore original fetch
        global.fetch = originalFetch;
    });
});

