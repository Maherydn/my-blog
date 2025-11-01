import { create } from "zustand";

interface CounterStore {
  count: number;
  setCount: (value: number) => void;
  increment: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  setCount: (value) => set({ count: value }),
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
