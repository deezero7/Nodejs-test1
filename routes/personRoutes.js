const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post('/', async (req, res) => {
    try{
      const data = req.body;
      const newMenu = new Person(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })

  // GET method to get the person
router.get('/', async (req, res) =>{
  try{
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
  }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})
  
  router.get('/', async (req, res)=> {
    
    try{
      const worktype = req.params.workType;
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const persons = await Person.find({workType: worktype});
        res.json(persons);
      }
      else{
        res.status(404).json({error: 'Invalid work type'});
      }
      
    }
    catch(err){
      console.error('Error fetching persons:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })

  module.exports = router;