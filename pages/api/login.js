const {connectToDatabase} = require('../../lib/mongodb');

export default async function Login(req, res) {

    switch (req.method) {
        case 'POST': {
            return login(req, res);

        }
    }
}

async function login(req, res) {
    console.log('in login')
    const email =req.body.email;
    try {
        let { db } = await connectToDatabase();
        let posts = await db
            .collection('info')
            .find({ email: email}, { $exists: true }).toArray(function (err, doc){
                if (doc && doc.length)
                {
                    if(req.body.purpose == "login" && req.body.password === doc[0].password && doc[0].isActive){
                        console.log(doc);
                        return res.json({
                            message: 'User Auth Success',
                            success: true,
                        });
                    }
                }
                else{
                    return res.json({
                        message: 'User Auth failed',
                        success: false,
                    });
                }
            });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}