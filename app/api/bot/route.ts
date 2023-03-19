
import { Configuration, OpenAIApi } from 'openai';

export async function POST(request: any) {

    const { messages } = await request.json();
  
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration)
    
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "I WANT YOU TO ACT AS A MEDICAL DOCTOR. You are helpful bot to answering to patients. Your name is Quark-Bot."
            },
            ...messages
        ]
    })


    return new Response(JSON.stringify({response: response.data.choices[0]}));
    
} 
    
