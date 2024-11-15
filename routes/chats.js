import express from 'express';
import Chats from '../models/chats.js';

const router = express.Router();

// GET route to get all chats @description: return all chats
router.get('/', async (req, res, next) => {
    try {
        const chats = await Chats.find();
        res.json(chats);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Failed to fetch chats' });
    }
});

// GET route to get a chat by ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const chat = await Chats.findById(id); 
        if (!chat) {
            return res.status(404).json({ error: 'Chat not found' });
        }
        res.json(chat);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Failed to fetch chat' });
    }
});

// POST route to create a new chat
router.post('/', async (req, res, next) => {
    try {
        const newChat = new Chats({ title: req.body.title || 'New Chat' }); 
        await newChat.save();
        res.status(201).json(newChat);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Failed to create chat' });
    }
});

export default router;
