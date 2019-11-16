import { useState } from "react";

export const useModal = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    return [open, data, setOpen, setData];
}