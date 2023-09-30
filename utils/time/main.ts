import { datetime } from './deps.ts'

export function now(tz: string = "Asia/Tokyo") : string {
  const now = datetime().toZonedTime(tz);
  return now.toISO();
}
