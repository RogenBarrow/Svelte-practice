require('dotenv').config()
import postgres from 'postgres'

const sql = postgres({ process: process.env.PG_CONN }) // will use psql environment variables

export default sql