import { create } from "zustand";
import type { CombinedDiscoveryMetaData } from "@myTypes/api";

interface FetchingState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface FetchingAction<T> {
  fetchData: (fetchFunction: () => Promise<T>) => Promise<void>;
  reset: () => void;
}

type FetchingStore<T> = FetchingState<T> & FetchingAction<T>;

export const createFetchingStore = <T>() =>
  create<FetchingStore<T>>((set) => ({
    // Initial state
    data: null,
    loading: false, // Initial state should be false before the fetch starts
    error: null,
    // Action to handle the fetch lifecycle
    fetchData: async (fetchFunction) => {
      //setTimeout
      const loadingDelay: Promise<void> = new Promise((resolve) => setTimeout(resolve, 2000));
      set({ loading: true, error: null });
      try {
        const [result] = await Promise.all([fetchFunction(), loadingDelay]);
        set({ loading: false, data: result });
      } catch (err: any) {
        const errorMessage = err.message || "An unknown error occurred.";
        await loadingDelay;
        // Add delay for error too
        set({
          loading: false,
          error: errorMessage,
          data: null,
        });
      }
    },

    // Action to reset the state
    reset: () => {
      set({
        data: null,
        loading: false,
        error: null,
      });
    },
  }));

export const useDiscoveryStore = createFetchingStore<CombinedDiscoveryMetaData[]>();
