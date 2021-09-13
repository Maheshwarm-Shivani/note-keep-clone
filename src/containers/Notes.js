import React, { useContext } from 'react';

// Custom Components
import List from '../components/List/List';
import NoteForm from '../components/Note/NoteForm';

// Context
import { NoteContext } from '../context/NoteContext';

const Notes = () => {
  const { notes } = useContext(NoteContext);

  const nonArchieved = notes.filter((note) => note.archieve === false);

  const pinnedNotes = nonArchieved.filter((note) => note.pin === true);
  const others = nonArchieved.filter((note) => note.pin === false);

  return (
    <div className='container'>
      <div className='note-form-con'>
        <NoteForm />
      </div>

      {pinnedNotes ? (
        <div style={{ padding: '20px 0px' }}>
          <h2>Pinned</h2>
          <div className='notes-list'>
            <List notesList={pinnedNotes} list='notes' />
          </div>
        </div>
      ) : (
        <></>
      )}
      {others ? (
        <div style={{ padding: '20px 0px' }}>
          <h2>Others</h2>
          <div>
            <List notesList={others} list='notes' />
          </div>
        </div>
      ) : (
        <h1>No Notes</h1>
      )}
    </div>
  );
};

export default Notes;
