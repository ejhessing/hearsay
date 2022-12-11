THis application was made as part of the Assembly AI Hackathon. It is a simple web application that allows users to record a conversation and then transcribe it.

## The problem:

My Grandmother is 99 years old and for the last 20 years has not been able to hear very well. She did not want to get a hearing aid and therefore the only we have to communicate with her is through writing. We write out questions and she speaks back to us. This works for the most part, but it is very time consuming and we often miss things. A common scenario is we are in the mitts of writing out a reply to one of her questions, but then she's moved on to a new topic or question, making it difficult to keep up.

## The solution:

I wanted to create a simple application that would allow us to have a conversation at close to normal speed, where she could ask me something, and read my reply as I speak it. I have also made the UI a little more friendly for her to use. As you can imagine at 99 she's not tech savvy in the slightest and therefor creating big buttons, have a few fonts for her to see which is more pleasant for her to read and a way to make it dark mode if that helps the with readability.

## To Run this application:

1. Clone the repo
2. Copy .env.sample to .env and fill in the values (Will need an API key from assemblyAI and it needs to be on the PRO plan to get the real time transacription)
3. Run `npm install`
4. Run `npm start`
5. Go to `localhost:3000` in your browser
