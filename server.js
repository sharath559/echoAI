const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Sentiment = require('sentiment');
require('dotenv').config();
const OpenAI = require('openai');

const app = express();
const PORT = 16000;
const sentiment = new Sentiment();

const openaiAPIKey = process.env.OPENAI_API_KEY;
const voiceID = process.env.VOICE_ID
const xiApiKey = process.env.XI_API_KEY

app.use(cors());
app.use(express.json());


const openai = new OpenAI({
  apiKey: openaiAPIKey // This is also the default, can be omitted
});

// Block negative messages
const isNegativeMessage = (message) => {
  const analysis = sentiment.analyze(message);
  return analysis.score < 0;  // Negative score indicates negativity
};

app.post('/pss/api/v1/convert-text', async (req, res) => {

  const { text } = req.body;
  headers = {
    "xi-api-key": xiApiKey || "",
    'Content-Type': 'application/json'
  }
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceID}`

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }


  if (isNegativeMessage(text)) {

    data = {
      "text":
        "Even in moments of negativity, remember that Sahaj Yoga offers a path to healing and positivity; every step toward awareness brings you closer to inner joy.",
      "voice_settings": {
        "stability": 0.9,
        "similarity_boost": 0.9,
        "use_speaker_boost": false
      }
    }

    const voiceResponse = await axios.post(url, data, {
      headers: headers, responseType: 'arraybuffer'
    }) // Set Axios to handle binary data });
    // Return the audio content to the frontend
    // Send the binary audio data to the frontend
    res.set({
      'Content-Type': 'audio/mpeg', // Correct MIME type for MP3
      'Content-Disposition': 'inline',
    });
    res.send(voiceResponse.data);

  }
  else {

    try {
      const textSahajaYoga = "give responses only related to sahaja yoga meditation. Dont answer other questions other than sahaja yoga meditation queries. nswer questions in a single, concise sentence."

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini-2024-07-18",
        max_tokens: 50, // Limit response to around 50 tokens
        temperature: 0.3, // Lower temperature for more concise answer
        messages: [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": `Based on the following data, answer this question: "${text}"\n\n${textSahajaYoga}`,
              }
            ]
          }
        ]
      });


      const responseText = response.choices[0].message?.content;


      data = {
        "text": responseText || "",
        "voice_settings": {
          "stability": 0.9,
          "similarity_boost": 0.9,
          "use_speaker_boost": false
        }
      }


      const voiceResponse = await axios.post(url, data, {
        headers: headers, responseType: 'arraybuffer'
      }) // Set Axios to handle binary data });
      // Return the audio content to the frontend
      // Send the binary audio data to the frontend
      res.set({
        'Content-Type': 'audio/mpeg', // Correct MIME type for MP3
        'Content-Disposition': 'inline',
      });
      res.send(voiceResponse.data);
    } catch (error) {
      console.error("Error with ElevenLabs API:", error.response ? error.response.data : error.message);
      res.status(500).json({ error: "Error generating speech", details: error.response ? error.response.data : error.message });
    }

  }







});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});