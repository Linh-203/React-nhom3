import { io } from "socket.io-client";

export const clientSocket = io("http://localhost:8000")
export const adminSocket = io("http://localhost:8000/admin")