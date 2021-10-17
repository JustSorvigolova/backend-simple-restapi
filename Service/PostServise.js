import Post from "../Post.js";
import FileServicePost from "./FileServicePost.js";

class PostServise{
    async create(post,picture){
        const filename = FileServicePost.saveFile(picture)
            const  createdPost= await Post.create({...post, picture: filename})
            return createdPost;
    }
    async getAll(){
            const posts =  await  Post.find();
            return posts;


    }
    async getOne(id) {
        if (!id) {
            throw new Error('error')
        }
            const post = await Post.findById(id)
            return post;
    }
    async update(post){
            if (!post._id) {
                throw new Error('error')
            }
            const postUpdate = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return postUpdate;

    }
    async delete(id){
            if (!id){
                throw new Error('error')
            }
            const postDeleted = await Post.findByIdAndDelete(id)
            return postDeleted;


    }
}

export default new PostServise();