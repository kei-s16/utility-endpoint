import { datetime } from './deps.ts'

export function now(tz: String = "Asia/Tokyo") : String {
  const now = datetime().toZonedTime(tz);
  return now.toISO();
}
