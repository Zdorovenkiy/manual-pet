import { useState } from "react";

export function useDropdownMenu() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function open() {
      setIsMenuVisible(true);
    }

    function close() {
      setIsMenuVisible(false);
    }

    return { isMenuVisible, open, close }
}