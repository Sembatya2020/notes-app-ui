import React, { useState, useEffect } from "react";
import "./App.css";
import { addNote, deleteNote, subscribeToNotes, Note } from "./firebase/notesService";

/**
 * Main App component that provides the Notes Management interface
 * Integrates with Firebase Firestore for cloud data storage
 */
function App() {
  // State management for notes and form inputs
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Set up real-time subscription to Firebase Firestore
   * This creates a live connection that updates the UI whenever data changes
   */
  useEffect(() => {
    const unsubscribe = subscribeToNotes((updatedNotes) => {
      setNotes(updatedNotes);
    });

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);

  /**
   * Handles adding a new note to Firebase Firestore
   * Validates input and provides user feedback during the process
   */
  const handleAddNote = async () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      setLoading(true);
      setError(null);
      
      try {
        // Add note to Firebase with automatic ID generation
        await addNote({
          title: newNote.title.trim(),
          content: newNote.content.trim(),
          category: 'general'
        });
        
        // Clear form after successful save
        setNewNote({ title: '', content: '' });
      } catch (err) {
        setError('Failed to add note. Please try again.');
        console.error('Error adding note:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  /**
   * Handles deleting a note from Firebase Firestore
   * @param noteId - The unique Firebase document ID of the note to delete
   */
  const handleDeleteNote = async (noteId: string) => {
    try {
      await deleteNote(noteId);
    } catch (err) {
      setError('Failed to delete note. Please try again.');
      console.error('Error deleting note:', err);
    }
  };

  return (
    <div className="app-container">
      <div className="note-form">
        <form className="note-form-container" onSubmit={(e) => e.preventDefault()}>
          {error && <div className="error-message">{error}</div>}
          
          <input
            type="text"
            placeholder="Title"
            className="title-input"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            required
            disabled={loading}
          />
          <textarea
            placeholder="Content"
            className="content-textarea"
            rows={10}
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            required
            disabled={loading}
          />
          <button
            type="button"
            className="add-note-btn"
            onClick={handleAddNote}
            disabled={loading || !newNote.title.trim() || !newNote.content.trim()}
          >
            {loading ? 'Adding...' : 'Add Note'}
          </button>
        </form>
      </div>
      
      <div className="notes-grid">
        {notes.length === 0 ? (
          <div className="no-notes">
            <p>No notes yet. Create your first note!</p>
          </div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note-card">
              <div className="note-header">
                <h3 className="note-title">{note.title}</h3>
                <button 
                  className="delete-btn"
                  onClick={() => note.id && handleDeleteNote(note.id)}
                  title="Delete note"
                >
                  ×
                </button>
              </div>
              <p className="note-content">{note.content}</p>
              {note.category && <span className="note-category">{note.category}</span>}
              {note.createdAt && (
                <div className="note-date">
                  Created: {new Date(note.createdAt).toLocaleDateString()}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
