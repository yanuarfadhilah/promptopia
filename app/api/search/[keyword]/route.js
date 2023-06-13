import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async(req, {params}) => {
    try {
        await connectToDB();

        const prompt = await Prompt.find({ $or: [ 
            { prompt: { $regex: params.keyword, $options: 'i' }  }, 
            { tag:  { $regex: params.keyword, $options: 'i' }   }, 
        ]}).populate('creator')

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), {status: 500});
    }
}