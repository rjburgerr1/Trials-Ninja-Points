import { io } from "socket.io-client";
import React from "react";

export const socket = io(process.env.REACT_APP_AXIOS_BASE_URL_PROD || "", {
    transports: ["websocket"],
});
export const SocketProvider = React.createContext<any>({} as any);
