import { Loader } from "@/shared/ui";
import useInitAuth from "./useInitAuth";
import type { PropsWithChildren } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
    const { isLoading } = useInitAuth();

    if (isLoading) {
        return <Loader />;
    }

    return children;
}