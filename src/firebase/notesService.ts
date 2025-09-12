import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "./config";

export interface Note {
  id?: string;
  title: string;
  content: string;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Collection reference
const notesCollection = collection(db, "notes");

// Add a new note
export const addNote = async (note: Omit<Note, 'id'>) => {
  try {
    const noteData = {
      ...note,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const docRef = await addDoc(notesCollection, noteData);
    return { id: docRef.id, ...noteData };
  } catch (error) {
    console.error("Error adding note: ", error);
    throw error;
  }
};

// Get all notes
export const getNotes = async (): Promise<Note[]> => {
  try {
    const q = query(notesCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Note));
  } catch (error) {
    console.error("Error getting notes: ", error);
    throw error;
  }
};

// Delete a note
export const deleteNote = async (noteId: string) => {
  try {
    await deleteDoc(doc(db, "notes", noteId));
  } catch (error) {
    console.error("Error deleting note: ", error);
    throw error;
  }
};

// Update a note
export const updateNote = async (noteId: string, updatedNote: Partial<Note>) => {
  try {
    const noteRef = doc(db, "notes", noteId);
    const updateData = {
      ...updatedNote,
      updatedAt: new Date()
    };
    await updateDoc(noteRef, updateData);
  } catch (error) {
    console.error("Error updating note: ", error);
    throw error;
  }
};

// Real-time listener for notes
export const subscribeToNotes = (callback: (notes: Note[]) => void) => {
  const q = query(notesCollection, orderBy("createdAt", "desc"));
  return onSnapshot(q, (querySnapshot) => {
    const notes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Note));
    callback(notes);
  });
};
