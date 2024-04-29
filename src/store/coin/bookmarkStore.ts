import { StorageKey } from "@/constants/shared/storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookmarkStoreType {
  bookmarkIds: string[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (id: string) => void;
}

const useBookmarkStore = create(
  persist<BookmarkStoreType>(
    (set, get) => ({
      bookmarkIds: [],
      isBookmarked: (id) => get().bookmarkIds.includes(id),
      toggleBookmark: (id) => set(({ bookmarkIds }) => {
        const idx = bookmarkIds.indexOf(id);
        const nextIds = [...bookmarkIds];
        idx === -1 ? nextIds.push(id) : nextIds.splice(idx, 1);

        return { bookmarkIds: nextIds }
      })
    }),
    {
      name: StorageKey.BookmarkStore,
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useBookmarkStore;