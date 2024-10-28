import { RequestHandler } from "express";
import NoteModel from "../models/notes"

export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        const notes = await NoteModel.find().exec(); // using exec to turn to real promise
        res.status(200).json(notes);
    } catch (error) {
        next(error)
    }
}

export const getNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId
    try {
        const note = await NoteModel.findById(noteId).exec();
        res.status(200).json(note);
    } catch (error) {
        next(error)
    }
}

export const createNotes: RequestHandler = async (req, res, next) => {
    const title = req.body.title;
    const text = req.body.text;
    
    try {
        const newNote = await NoteModel.create({
            title: title,
            text: text,
        })

        res.status(201).json(newNote)
        
    } catch (error) {
        next(error)
    }
}