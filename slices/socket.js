import { io } from "socket.io-client";

// Initialize a socket connection
const socket = io(process.env.NEXT_PUBLIC_API_URL);
export default socket;
