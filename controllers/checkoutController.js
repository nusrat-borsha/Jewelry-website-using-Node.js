const Jewel = require('../models/jewelModel');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.getCheckoutSession = async (req,res)=>{
    // 1. Get the currently checkout item 
    const jewel = await Jewel.findById(req.params.id);
    console.log(jewel);
    //2. create a new checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${req.protocol}://${req.get('host')}/`,
        cancel_url: `${req.protocol}://${req.get('host')}/jewel/${jewel.slug}`,
        client_reference_id: req.params.jewelId,
        line_items: [
           {
               name: `${jewel.name} Jewel`,
               description: jewel.description,
               amount: jewel.price*100,
               currency: 'usd',
               quantity: 1,
           }
        ]
    });

    //3. create session as response
    res.status(200).json({
        status: 'success',
        session,
    });

}