exports.getPost = (req,res,next)=>{
    res.status(200).json({
        posts: [{title: 'First Post', content: 'Post Content!'}]
    });
}

exports.postPost = (req,res,next)=>{
    console.log(req.body);
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'New Post Created!',
        post: {id: new Date().toISOString, title: title, content: content}
    });
}