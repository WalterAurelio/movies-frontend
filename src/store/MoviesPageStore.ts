import { create } from 'zustand';

type MoviesPage = {
  page: number,
  setPage: (value: number) => void
}

export const useMoviesPageStore = create<MoviesPage>((set) => ({
  page: 1,
  setPage: (value) => {
    set({ page: value })
  }
}));