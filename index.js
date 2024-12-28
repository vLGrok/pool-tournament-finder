require('dotenv').config();
const { Anthropic } = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

async function main() {
    try {
        const message = await anthropic.messages.create({
            model: "claude-3-sonnet-20240229",
            max_tokens: 1024,
            messages: [
                { role: "user", content: "What is the meaning of life?" }
            ]
        });

        console.log('Response:', message.content[0].text);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();