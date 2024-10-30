ChatVoice - Voice-Enhanced AI Meditation Assistant for Sahaja Yoga
Project Overview
ChatVoice for Sahaja Yoga is a meditation application that combines the power of OpenAI's ChatGPT with ElevenLabs' voice technology to offer an interactive, voice-guided meditation experience. The app provides real-time, conversational guidance, allowing users to ask questions about Sahaja Yoga, learn about meditation techniques, and receive calming audio responses.

Built with React on the frontend and Node.js on the backend, ChatVoice integrates advanced AI capabilities to enhance meditation with a personalized, voice-assisted touch. Ideal for both beginners and seasoned practitioners, this app creates a seamless and immersive meditation experience.

Features
Voice-Guided Meditation: Provides voice-narrated meditation sessions using ElevenLabs’ soothing voices, helping users achieve a deep, calming meditation state.
Interactive Q&A on Sahaja Yoga: Users can ask questions about Sahaja Yoga, including philosophy, chakras, and meditation practices. ChatGPT provides insightful responses, both in text and audio form.
Customizable Meditation Voice: Users can choose their preferred voice style, tone, and tempo, allowing for a personalized meditation experience.
Personalized Meditation Feedback: ChatGPT can give personalized suggestions to users based on their meditation progress and challenges.
Daily Meditation Reminders: Users can set reminders to maintain a consistent meditation practice.
Technologies Used
Frontend: React for building a responsive and user-friendly UI.
Backend: Node.js and Express for handling API requests, managing sessions, and serving meditation content.
APIs:
OpenAI's ChatGPT API: Processes user queries and provides informative responses on Sahaja Yoga practices and philosophy.
ElevenLabs Voice API: Converts text-based responses into natural, soothing audio.
Installation
Prerequisites
Node.js and npm installed.
OpenAI API key and ElevenLabs API key. Sign up for these services and get your API keys:
OpenAI API
ElevenLabs
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/sharath559/echoAI.git
cd chatvoice-sahaja-yoga
Install dependencies:

bash
Copy code
npm install
Create environment file: Create a .env file in the root directory and add your API keys:

plaintext
Copy code
OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
XI_API_KEY=your_elevenlabs_api_key
VOICE_ID = your voice ID

bash
Copy code
npm run dev
The app will start on http://localhost:3000 (frontend) and the backend server will run on http://localhost:5000.

Implementation Details

Frontend

The React frontend includes:
A calming, nature-inspired UI for a peaceful user experience.
A "Start Meditation" button to begin a guided meditation.
Options for users to ask questions or seek guidance on Sahaja Yoga techniques and concepts.
A customizable voice settings panel for users to adjust the meditation guide’s voice.


Backend

The Node.js backend includes:
API endpoints to handle requests from the frontend and communicate with OpenAI and ElevenLabs APIs.
Error handling for API responses to provide a seamless user experience.
Offline-accessible content for common meditation instructions and frequently asked questions.
API Integration


OpenAI ChatGPT:
Generates answers and guidance on meditation practices, chakra knowledge, and philosophical concepts.


ElevenLabs Voice:
Converts ChatGPT’s responses into a soothing, human-like voice for an immersive meditation experience.


Real-time Streaming:
Provides streaming responses for immediate audio playback during guided meditation sessions.
Demo App Flow


Guided Meditation: Users click on "Start Meditation" to initiate a voice-guided Sahaja Yoga session. ChatGPT provides calming instructions, and ElevenLabs narrates each step.
Ask the Guru: Users can click "Ask the Guru" to ask questions about meditation techniques, chakra balancing, or Sahaja Yoga philosophy. ChatGPT responds, and ElevenLabs converts the response to audio.

Daily Tips & Reminders: ChatGPT offers daily meditation tips and users can set reminders for their next session.
Potential Use Cases
Daily Guided Meditation: Users follow guided sessions tailored for Sahaja Yoga practitioners, from beginners to advanced levels.

Meditation Insights: Provides personalized suggestions and tips to improve users' meditation experience.
Chakra and Philosophy Q&A: Users can explore more about chakras, Sahaja Yoga practices, and the philosophy behind the meditation.
Challenges and Considerations
Maintaining a Calming Tone: Configure ElevenLabs voice settings to use soothing, natural-sounding voices.

Minimizing Latency: Reduce latency for real-time audio streaming for uninterrupted meditation flow.

Content Sensitivity: Ensure that ChatGPT’s responses align with Sahaja Yoga principles and teachings.



Acknowledgments
Special thanks to OpenAI for providing the ChatGPT API.
Thank you to ElevenLabs for enabling voice synthesis capabilities.
This ChatVoice - Voice-Enhanced AI Meditation Assistant for Sahaja Yoga project brings the power of AI and voice technology into a unique, interactive meditation experience that enhances daily practice with personalized, voice-guided meditation sessions and spiritual insights.











