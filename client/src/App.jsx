import React, { useRef, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [question, setQuestion] = useState('');
  const [audioSrc, setAudioSrc] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);

  const handleSubmit = async (e) => {

    // Stop any current audio playback before making a new API call
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;  // Reset playback position
    }
    setLoading(true);
    setAudioUrl(null); // Clear previous audio
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:16000/pss/api/v1/convert-text', { text: question }, { responseType: 'blob' });

      // Create a URL for the audio Blob
      const audioUrl = URL.createObjectURL(response.data);
      setAudioUrl(audioUrl);
      setLoading(false);
      setAudioSrc(audioUrl);
    } catch (error) {
      console.error("Error generating audio:", error);
    }

  };

  // Function to stop audio playback
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  return (
    <div style={styles.container}>

      <img
        src={`/mataji.jpg`}
        alt="Sri Mataji"
        style={styles.image}
      />

      <h1 style={styles.title}>Sahaja Yoga Meditation AI</h1>
      {loading && (
        <div style={{ marginTop: '20px' }}>
          <div className="spinner"></div> {/* Spinner here */}
          <p>Generating response, please wait...</p>
        </div>
      )}
      {/* Add simple CSS spinner */}
      <style jsx="true">{`
        .spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <form onSubmit={handleSubmit}>
        <input
          style={styles.textarea}
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a meditation question"
          required
        />
        <button style={styles.button(loading || !question)} type="submit"> {loading ? 'Generating...' : 'Ask'}</button>
      </form>


      {audioSrc && (
        <div style={styles.audioContainer}>
          <audio ref={audioRef} src={audioSrc} autoPlay style={styles.audio} />
          <button onClick={stopAudio} style={styles.stopButton}>Stop</button>
        </div>
      )}
    </div>
  );
};


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '100px auto', // Centered on the page
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#f0f5f9',
    textAlign: 'center',
  },
  title: {
    color: '#2c3e50',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    border: '2px solid #3498db',
    borderRadius: '8px',
    fontSize: '16px',
    resize: 'none',
    outline: 'none',
    marginBottom: '20px',
    backgroundColor: '#fff',
    transition: 'border-color 0.3s',
    boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.05)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  button: (disabled) => ({
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: disabled ? '#bdc3c7' : '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.2s',
  }),
  stopButton: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  spinnerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  spinner: {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #3498db',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    animation: 'spin 1s linear infinite',
  },
  error: {
    color: 'red',
    marginTop: '20px',
    fontSize: '16px',
  },
  audioContainer: {
    marginTop: '20px',
  },
  audio: {
    width: '100%',
    borderRadius: '8px',
  },
};



export default App;
