import { config } from 'dotenv'

config()

const { TELEGRAM_TOKEN } = process.env

if (!TELEGRAM_TOKEN) {
  throw new Error('Create .env file before launching')
}

export const token = TELEGRAM_TOKEN
