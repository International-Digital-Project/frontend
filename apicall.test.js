// useApiCall.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import useApiCall from './useApiCall';

jest.mock('axios');

describe('useApiCall', () => {
  it('fetches data successfully', async () => {
    
    axios.get.mockResolvedValue({ data: ['booking1', 'booking2'] });

    let result;
    await act(async () => {
      result = renderHook(() => useApiCall());
    });

    expect(result.current).toEqual(['booking1', 'booking2']);
  });

  it('handles errors correctly', async () => {

    axios.get.mockRejectedValue(new Error('API error'));

    let result;
    await act(async () => {
      result = renderHook(() => useApiCall());
    });

    // See console.log for errors

  });

  it('has the correct initial state', () => {
    let result;
    act(() => {
      result = renderHook(() => useApiCall());
    });

    expect(result.current).toEqual([]);
  });
});
