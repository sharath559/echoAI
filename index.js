const axios = require('axios');

async function convertToSpeech(text) {
  const response = await axios.post('https://api.elevenlabs.io/v1/speech/synthesize', {
    text: text,
    voice: "custom_voice_id", // Replace with your cloned or chosen voice ID
    model_id: "eleven_monolingual_v1" // Check ElevenLabs documentation for available models
  }, {
    headers: {
      'Authorization': `Bearer YOUR_ELEVENLABS_API_KEY`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.audioContent;
}