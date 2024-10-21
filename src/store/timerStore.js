import { create } from "zustand";

export const useTimerStore = create((set) => ({
    startTimer: 0,
    typeOfTimer: "analog",
    isInterval: false,
    isBreak: false,
    breakTime: 5,
    nmbrOfLoops: 0,

    increamentTimer: () => set((state) => ({ startTimer: state.startTimer < 60 ? state.startTimer + 1 : 60 })),
    decrementTimer: () => set((state) => ({ startTimer: state.startTimer > 0 ? state.startTimer - 1 : 0 })),
    changeTypeOfTimer: (type) => set({ typeOfTimer: type }),
    toggleIsInterval: () => set((state) => ({ isInterval: !state.isInterval })),
    toggleIsBreak: () => {
        set((state) => ({ isBreak: !state.isBreak }));
    },
    incrementNmbrOfLoops: () => set((state) => ({ nmbrOfLoops: state.nmbrOfLoops + 1 })),
    resetNmbrOfLoops: () => set(() => ({ nmbrOfLoops: 0 })),
}));
