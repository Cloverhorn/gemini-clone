// import React from 'react'
// import { API_KEY } from './env'
// import { GoogleGenerativeAI } from '@google/generative-ai'

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//     ],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   console.log(result.response.text());
// }

// export default run;


import React from 'react'
import { API_KEY } from './env.js'
import { GoogleGenerativeAI } from '@google/generative-ai'

async function run(prompt) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const genAI = new GoogleGenerativeAI(API_KEY)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  // const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text)
  return text
}

// async function run(prompt) {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const genAI = new GoogleGenerativeAI(API_KEY)
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//   let result = ''
//   console.log(prompt)
  
//   model.generateContent(prompt)
//     .then(result => result.response)
//     .then(response => response.text())
//     .then(text => {
//       console.log(text)
//       result = text
//     })
//     .catch(error => console.error(error));

// }

export default run
