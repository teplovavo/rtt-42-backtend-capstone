import express from 'express'

const router = express .Router()

// get route to get all chats

router.get('/', (req, res) => {
    res.send('Hello from Chats')
});

export default router;
