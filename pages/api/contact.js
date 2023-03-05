import {MongoClient} from "mongodb";

async function  handler(req, res) {
    if(req.method === 'POST')
    {
        const {email, name, message} = req.body;
        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '')
        {
            res.status(422).json({message: 'Invalid input'})
            return;
        }
        const newMessage = {
            email,
            name,
            message
        }
        let client;
        try {
            client = await MongoClient.connect(process.env.URL);

        }catch (e)
        {
            res.status(500).json({message: "Couldn't connect to db"})
        }

        const db = client.db('blog');
        try {
            const result = await db.collection('contact').insertOne(newMessage);
            newMessage.id = result.insertedId;
        }catch (e)
        {
            await client.close();
            res.status(500).json({message: "Server error"})
            return
        }
        await client.close()

        res.status(201).json({message: 'Successfully stored data'})
    }
}

export default handler;