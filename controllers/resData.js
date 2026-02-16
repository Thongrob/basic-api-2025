

//สร้าง controller

exports.resdata = (req, res, next) => {
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
       },
       {
       "id_emp":3,
        "firstname":"Scout",
        "lastname":"Lang",
        "department":"HR"
       },
       {
       "id_emp":4,
        "firstname":"Bob",
        "lastname":"Smith",
        "department":"Accounting"
       }

    ])
}



