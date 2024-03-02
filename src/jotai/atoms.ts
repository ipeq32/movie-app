import { atomWithStorage } from "jotai/utils";

export const user = atomWithStorage<boolean>("user", false);
user.debugLabel = "user";