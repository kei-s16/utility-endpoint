import { Hono } from './deps.ts'
import { now } from './utils/time/main.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    currentTime: now(),
    userAgent: c.req.header('User-Agent'),
    ipAddress: c.req.header('X-Forwarded-For'),
  });
});

export default app;
