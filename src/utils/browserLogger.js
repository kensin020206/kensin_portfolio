/**
 * Browser logging via Consola (https://github.com/unjs/consola).
 * Avoid npm "emojiprint-logger" — compromised / malware.
 */
import { logger } from 'emojiprint-logger'

export const browserLogger = logger

export default logger
