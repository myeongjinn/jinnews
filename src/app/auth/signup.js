export default function handler(res,rep){
    if(res.method == 'POST' ){
        // let db = (await connectDB).db('forum');
        // await db.collection('user_cred').insertOne(res.body);

        req.status(200).json('가입성공')
    }
}