

//สร้าง controller

exports.cal = (req, res, next) => {
    res.json([
      {
       "id_emp":1,
        "firstname":"Joe",
        "lastname":"Limp",
        "department":"IT"
       },
       {
       "id_emp":2,
        "firstname":"Marta",
        "lastname":"Spread Brow",
        "department":"Engineering"
       }
    ])
}



