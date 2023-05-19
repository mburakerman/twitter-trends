import redis from "./redis";

export const fetchFromRedis = async <T>(
  key: string,
  fetchFunction: () => Promise<T>,
  expireTime = 3600
): Promise<T> => {
  try {
    const redisData = await redis.get(key);
    if (redisData) {
      return JSON.parse(redisData);
    }

    const data = await fetchFunction();
    await redis.set(key, JSON.stringify(data), "EX", expireTime);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
