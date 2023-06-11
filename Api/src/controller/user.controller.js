
const { pool } = require("../database");


const postRegister = async (request, response) =>
{
    try
    {
        console.log(request.body);
        let sql = "INSERT INTO user (name, last_name, email, photo, password)"+
                  "VALUES ('" + request.body.name + "', '" + request.body.last_name + "', '" + request.body.email + "', '" + request.body.photo + "', '" + request.body.password +"')"
                                

    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result);

    if (result.insertId)
        response.send(String(result.insertId));
    else
        response.send("-1");
    }
    catch(error)
    {
        console.log(error)
    }
    
}

//////////////////////////////////////

const postLogin = async (request, response) => {
    try {
        console.log(request.body);

        if (request.body.email && request.body.password) {
            let sql = "SELECT id_user, name, last_name, email, photo FROM user"

            //pa por siacaso necesito los datos de un solo usuario//
            
            // let sql = "SELECT id_user, name, last_name, email, photo FROM user  WHERE email ='"+request.body.email+"' AND password = '"+request.body.password+"'"

            console.log(sql);
            let [result] = await pool.query(sql);
            console.log(result);
            response.send(result)
        }
    }
    catch (error) {
        console.log(error)
    }

}


module.exports = { postRegister, postLogin}