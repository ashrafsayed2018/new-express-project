// api/index.ts
const express = require('express')
const { createServer } = require('http')

const app = express()

app.get('/', (req, res) => {
  res.send('Express running on Vercel! ashraf')
})

app.get('/health', (req, res) => {
  res.send('this is the health route for my app')
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' })
})
const server = createServer(app)

module.exports = (req: any, res: any) => {
  server.emit('request', req, res)
}
