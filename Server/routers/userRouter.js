const {Router}=require('express')
const {registerUser,loginUser,getUser,changeAvatar,editUser,getAuthors} =require('../controller/userControllers')
const router=Router()
// router.get('/',(req,res,next)=>{
//     res.json("This is the user route ")
// })
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/:id',getUser)
router.get('/',getAuthors)
router.post('/change-avatar',changeAvatar)
router.patch('/edit-user',editUser)
module.exports=router