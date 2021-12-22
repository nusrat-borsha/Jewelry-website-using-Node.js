const Jewel = require('../models/jewelModel'); 

exports.getIndex = async (req, res) => {

    try{
       const jewels = await Jewel.find();
       res.status(200).render('index', {
           jewels
       });


    } catch(err){

      res.status(400).json({
        status : 'fail',
        message : 'Invalid data sent'
      });
    }
};

exports.getAllCollection = async (req, res) => {

  try{
     const jewels = await Jewel.find();
     res.status(200).render('all-items', {
         jewels
     });


  } catch(err){

    res.status(400).json({
      status : 'fail',
      message : 'Invalid data sent'
    });
  }
};


exports.getJewelBasedOnCategory = async (req, res) => {

  try{
     console.log(req.params.category);
     const jewels = await Jewel.find({category : req.params.category});
     res.status(200).render('all-items', {
         jewels
     });


  } catch(err){

    res.status(400).json({
      status : 'fail',
      message : 'Invalid data sent'
    });
  }
};