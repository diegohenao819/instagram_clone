
const User = require("../models/users")
const bcryptjs = require("bcryptjs")


async function register(input){
    const newUser = input;
            newUser.email = newUser.email.toLowerCase();
            newUser.username = newUser.username.toLowerCase()

            const {email, username, password} = newUser;

            // Revisamos si el email está en uso
            const foundEmail = await User.findOne({email})
            if(foundEmail) throw new Error ("El email ya está en uso")

            // Revisamos si el username está en uso
            const foundUsername = await User.findOne({username});
            if(foundUsername) throw new Error("El nombre de usuario ya está en uso")

            // Encriptar contraseña
            const salt = await bcryptjs.genSaltSync(10);
            newUser.password = await bcryptjs.hash(password, salt)

            try {
                const user = new User(newUser);
                user.save()
                return user
            } catch (error) {
                console.log(error)
            }
}

async function login(input){
    const {email, password} = input;

    console.log("el correo es" + email)
    console.log("el password es" + password)

}

module.exports = {
    register,
    login, 
};