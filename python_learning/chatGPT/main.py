import openai
import requests as re
import os
import dotenv


dotenv.load_dotenv()

key = os.environ.get("key")
openai.api_key = key





def generate_response(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    return response["choices"][0]["text"]

generated_text = generate_response(input("ask"))
print(generated_text)
