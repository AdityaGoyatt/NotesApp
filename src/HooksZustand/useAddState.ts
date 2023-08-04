import { create } from "zustand";

interface AddingStore {
  addState: "New" | "Existing";
  isAdding: Boolean;
  changeIsAdding: (state: Boolean) => void;
  changeAddingState: (addState: "New" | "Existing") => void;
}

const useAddingState = create<AddingStore>((set) => ({
  addState: "New",
  newAddingState: () => set(() => ({ addState: "New" })),
  changeAddingState: (add) => set(() => ({ addState: add })),
  isAdding: false,
  changeIsAdding: (State) => set((store) => ({ isAdding: State })),
}));

export default useAddingState;
