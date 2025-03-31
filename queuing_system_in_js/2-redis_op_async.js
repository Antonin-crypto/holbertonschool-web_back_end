import redis from "redis";
import { promisify } from "util";

// Create Redis client
const client = redis.createClient();

// Promisify the get method
const getAsync = promisify(client.get).bind(client);

// Handle connection events
client.on("connect", () => {
  console.log("Redis client connected to the server");
});
