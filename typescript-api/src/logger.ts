import { createLogger, format, transports } from 'winston'
import type { HookContext, NextFunction } from './declarations'

// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
export const logger = console

export const logErrorHook = async (context: HookContext, next: NextFunction) => {
  try {
    await next()
  } catch (error) {
    logger.error(error)
    throw error
  }
}
