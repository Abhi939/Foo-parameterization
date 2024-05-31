const express = require('express');
const app = express();
const router=express.Router()
const { calculateVolume } = require('./core');

app.use(express.json());

const port = process.env.PORT || 5000;
const getVolume= async (req,res)=>{
    try {
        if(req.params.id<0)
            {
                return res.json({msg: 'Radius of Sphere cannot be negative'});
            }
        const volume=await calculateVolume(req.params.id);
        res.send({Volume_of_Sphere:volume});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
router.route('/:id').get(getVolume);

app.use('/api/v1',router);


module.exports = router

const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
start();




module.exports = { getVolume };
