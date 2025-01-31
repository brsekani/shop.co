import { create } from "zustand";

interface SearchState {
  searchOpen: boolean;
  setSearchOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchOpen: false,
  setSearchOpen: (value) =>
    set((state) => ({
      searchOpen: typeof value === "function" ? value(state.searchOpen) : value,
    })),
}));
