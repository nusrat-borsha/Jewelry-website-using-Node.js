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