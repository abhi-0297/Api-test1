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
  res.status(200).json({ status: true, data: db.class })

})


router.post('/', (req, res) => {
  
  const {classId, name} = req.body
  const id = db.user.length + 1
  db.class.push({classId, name, id})
  res.status(200).json({ status: true, data: db.class })
})


router.delete("/:id" ,(req,res)=>{
  const{id} =req.params;
  const deleted=db.class.find(classId=> classes.id ==id);
  if (deleted){
    console.log(deleted);
    db.class=db.class.filter(classId => classes.id!== id);
    res.status(200).json(deleted)
  } else{
    console.log(deleted)
    res.status(404).json({message:"class you are looking for does not exist"});

  }
  
})


  router.put("/:id",(req,res)=>{
   const {id} =req.params;
   console.log(id)
   const changes=req.body;
   const index=db.class.findIndex(classes=>classes.id==id);

   if(index!== -1){
     =changes;
     res.status(200).json(class[index]);
   } else{
     res.status(404).json({message:"class not exist"});

    }
  });




module.exports = router