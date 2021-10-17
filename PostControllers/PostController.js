import PostServise from "../Service/PostServise.js";

class PostController{
    async create(req,res){
        try {
            const post = await PostServise.create(req.body, req.file.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try {
            const posts =  await  PostServise.getAll()
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try {
            const post =  await  PostServise.getOne(req.params.id)
            return res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try {
            const postUpdate = await PostServise.update(req.body);
            return res.json(postUpdate)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try {
            const post = await PostServise.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new PostController();