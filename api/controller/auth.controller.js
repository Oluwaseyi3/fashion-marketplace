import User from "../models/user.model.js"

export const register = async(req, res) =>{
   try {
     const newUser = new User(req.body)

      await newUser.save()
     console.log(newUser);
    res.status(201).send("User has been created!")
   } catch (error) {
      res.status(500).send("Something went wrong")
      console.log(error);
   }
}

export const login = async(req, res) =>{
    
}

export const logout = async(req, res) =>{
    
}