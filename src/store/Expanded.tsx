import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface ExpandedState {
  expanded: boolean;
  toggleExpanded: () => void;
}

// const ExpandedStore = create<ExpandedState>(
//   (set) => ({
//     expanded: true,
//     toggleExpanded: () => {
//       set((state) => ({ expanded: !(state.expanded) }))
//     }
//   }
//   )
// );


const ExpandedStore = create<ExpandedState>(
  // @ts-expect-error
  devtools(
    persist(
      (set, get) => ({
        expanded: false,
        toggleExpanded: () => set({ expanded: !(get().expanded) })
      }),
      {
        name: "expanded-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    ),
  )
);


export default ExpandedStore;