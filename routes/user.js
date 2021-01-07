// const userRoutes = (app, fs) => {

//     const dataPath = './data/db.json';

//     // READ
//     app.get('/users', (req, res) => {
//       fs.readFile(dataPath, 'utf8', (err, data) => {
//         if (err) {
//           throw err;
//         }

//         res.send(JSON.parse(data));
//       });
//     });
//   };

//   module.exports = userRoutes;


const router = require('express').Router()
const db = require('../data/db.json')

router.get('/', (req, res) => {
  res.status(200).json({ status: true, data: db.user })
})

router.get('/', (req, res) => {
  res.status(200).json({ status: true, data: db.user })
})

router.post('/', (req, res) => {
  const {classId, name, email} = req.body
  const id = db.user.length + 1
  db.user.push({ classId, name, email, id })
  res.status(200).json({ status: true, data: db.user })
})




router.delete('/', (req,res) =>{
  console.log(req);
   const user = userData.find(d => d.id === parseInt(req.params.id))
   if(!user) res.status(404).send('user not found')

   //delete
   const index = userData.indexOf(user);
   userData.splice(index,1);

   res.send(userData)
  })



router.put= function(req, res) {
  var id = parseInt(req.params.id);
  var updatedUser = req.body; 
  if(user["user" + id] != null){
    // update data
    user["user" + id] = updatedClass;
 
    console.log("--->Update Successfully, User: \n" + JSON.stringify(User, null, 3))
  // return
  res.end("Update Successfully! \n" + JSON.stringify(updatedUser, null, 3));
}else{
  res.end("Don't Exist User:\n:" + JSON.stringify(updatedUser, null, 2));
}
};


module.exports = router