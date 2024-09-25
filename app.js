// 
const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3001;

const createImageStorage=(folderpath)=>{
    return multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,folderpath);
        },
        filename:(req,file,cb)=>{
            const imageName=file.originalname;
            cb(null,imageName);
        }
    });
};

const uploads=multer({storage:createImageStorage('public/uploads')});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory

const db = mysql.createConnection({
    host :'localhost',
    user :'root',
    password : '',
    database : 'dr'
});
db.connect((err)=>{
    if(err) throw err
    console.log('database connected');
});
app.get('/', (req, res) => {
    const homeSql = 'select * from home';
    const aboutSql = 'select * from about';
    const homeserviceSql = 'select * from homeservice';
    const homecontentSql = 'select * from homecontent';
    const aboutcontentSql = 'select * from aboutcontent';
    const servicecontentSql = 'select * from servicecontent';
    const appointmentSql = 'select * from appointments';
    const departmentsSql = 'select * from departments';
    const teamSql = 'select * from team';
    db.query(homeSql, (err, homeResult) =>{
        if(err) throw err
        db.query(aboutSql, (err,aboutResult)=>{
            if(err) throw err
            db.query(homeserviceSql,(err,homeserviceResult) =>{
            if(err) throw err
            db.query(homecontentSql,(err,homecontentResult)=>{
                if(err) throw err
                db.query(aboutcontentSql,(err,aboutcontentResult)=>{
                    if(err) throw err
                    db.query(servicecontentSql,(err,servicecontentResult)=>{
                        if(err) throw err
                        db.query(appointmentSql,(err,appointmentResult)=>{
                            if(err) throw err
                            db.query(departmentsSql,(err,departmentsResult)=>{
                                if(err) throw err
                                db.query(teamSql,(err,teamResult)=>{
                                    if(err) throw err
                                    res.render('index',{about:aboutResult,home:homeResult,homeservice:homeserviceResult,homecontent:homecontentResult,
                                                        aboutcontent:aboutcontentResult,servicecontent:servicecontentResult,appointment:appointmentResult,
                                                        departments:departmentsResult,team:teamResult});
                                });
                            });
                        });
                    });
                });
            });
        });
        });
        
    });
});

// dashboard 

app.get('/dashboard',(req,res)=>{
    const homeSql = 'select * from home';
    const aboutSql = 'select * from about';
    const homeserviceSql = 'select * from homeservice';
    const homecontentSql = 'select * from homecontent';
    const aboutcontentSql = 'select * from aboutcontent';
    const servicecontentSql = 'select * from servicecontent';
    const appointmentSql = 'select * from appointments';
    const departmentsSql = 'select * from departments';
    const teamSql = 'select * from team';
    db.query(homeSql, (err, homeResult) =>{
        if(err) throw err
        db.query(aboutSql, (err,aboutResult)=>{
            if(err) throw err
            db.query(homeserviceSql,(err,homeserviceResult) =>{
            if(err) throw err
            db.query(homecontentSql,(err,homecontentResult)=>{
                if(err) throw err
                db.query(aboutcontentSql,(err,aboutcontentResult)=>{
                    if(err) throw err
                    db.query(servicecontentSql,(err,servicecontentResult)=>{
                        if(err) throw err
                        db.query(appointmentSql,(err,appointmentResult)=>{
                            if(err) throw err
                            db.query(departmentsSql,(err,departmentsResult)=>{
                                if(err) throw err
                                db.query(teamSql,(err,teamResult)=>{
                                    if(err) throw err
                                    res.render('dashbord',{about:aboutResult,home:homeResult,homeservice:homeserviceResult,homecontent:homecontentResult,
                                                        aboutcontent:aboutcontentResult,servicecontent:servicecontentResult,appointment:appointmentResult,
                                                        departments:departmentsResult,team:teamResult});
                                });
                            });
                        });
                    });
                });
            });
        });
        });
        
    });
});
// record data
app.get('/recorddata',(req,res)=>{
    const homeSql = 'select * from home';
    const aboutSql = 'select * from about';
    const homeserviceSql = 'select * from homeservice';
    const homecontentSql = 'select * from homecontent';
    const aboutcontentSql = 'select * from aboutcontent';
    const servicecontentSql = 'select * from servicecontent';
    const appointmentSql = 'select * from appointments';
    const departmentsSql = 'select * from departments';
    const teamSql = 'select * from team';
    db.query(homeSql, (err, homeResult) =>{
        if(err) throw err
        db.query(aboutSql, (err,aboutResult)=>{
            if(err) throw err
            db.query(homeserviceSql,(err,homeserviceResult) =>{
            if(err) throw err
            db.query(homecontentSql,(err,homecontentResult)=>{
                if(err) throw err
                db.query(aboutcontentSql,(err,aboutcontentResult)=>{
                    if(err) throw err
                    db.query(servicecontentSql,(err,servicecontentResult)=>{
                        if(err) throw err
                        db.query(appointmentSql,(err,appointmentResult)=>{
                            if(err) throw err
                            db.query(departmentsSql,(err,departmentsResult)=>{
                                if(err) throw err
                                db.query(teamSql,(err,teamResult)=>{
                                    if(err) throw err
                                    res.render('recorddata',{about:aboutResult,home:homeResult,homeservice:homeserviceResult,homecontent:homecontentResult,
                                                        aboutcontent:aboutcontentResult,servicecontent:servicecontentResult,appointment:appointmentResult,
                                                        departments:departmentsResult,team:teamResult});
                                });
                            });
                        });
                    });
                });
            });
        });
        });
        
    });
});
// F.A.Qs
app.get('/faqs',(req,res)=>{
    res.render('faqs')
});

// Appointments dash
app.get('/appointments',(req,res)=>{
    const appointmentSql = 'select * from appointments';
    db.query(appointmentSql,(err,appointmentResult)=>{
        if(err) throw err
            res.render('appointments',{appointments:appointmentResult});
        });
    });


// login

app.get('/login',(req,res)=>{
    res.render('login');
});
// Patients dash
app.get('/patients',(req,res)=>{
    const sql = 'select * from patients';
    const teamSql = 'select * from team';
    db.query(sql,(err,sqlresult)=>{
        if(err) throw err
        db.query(teamSql,(err,teamrresult)=>{
            if(err) throw err
            res.render('patients',{patients:sqlresult,team:teamrresult});
        });
    });
    // res.render('patients');
});

// app.get('/',(req,res)=>{
//     res.render('index')
// })

// app.get('/dashboard',(req,res)=>{
//     res.render('dashbord')
// })
// INSERTING
    // homeCOntent
    app.post('/addHomecontent',(req,res)=>{
        const {title,description} = req.body;
        const sql = 'insert into homecontent(title,description) values (?,?)';
        db.query(sql,[title,description],(err,result)=>{
            if(err) {
                console.error('Error inserting into homecontent card:', err.stack);
                res.status(500).send('<script>alert("Error inserting into homecontent card")</script>');
                return;
            }
            res.redirect('/dashboard');
        });
    });
    // homeCOntent
    app.post('/addHomeservice',(req,res)=>{
        const {title,description} = req.body;
        const sql = 'insert into homeservice(title,description) values (?,?)';
        db.query(sql,[title,description],(err,result)=>{
            if(err) {
                console.error('Error inserting into homeservice card:', err.stack);
                res.status(500).send('<script>alert("Error inserting into homeservice card")</script>');
                return;
            }
            res.redirect('/dashboard');
        });
    });
    // makeappointment
    app.post('/makeAppointment',(req,res)=>{
        const {names,email,phone,appointment_date,department_name,doctors_name,message } = req.body;
        const sql = 'insert into appointments(names,email,phone,appointment_date,department_name,doctors_name,message) values (?,?,?,?,?,?,?)';
        db.query(sql,[names,email,phone,appointment_date,department_name,doctors_name,message],(err,result)=>{
            if(err) {
                console.error('Error making appointment:', err.stack);
                res.status(500).send('<script>alert("Error making appointment")</script>');
                return;
            }
            res.redirect('/');
        });
    });

    // addDepartment
    app.post('/addDepartment',uploads.single('image'),(req,res)=>{
        const image= req.file.originalname;
        const{title,description} = req.body;
        const sql = 'insert into departments(title,description,image) values(?,?,?)';
        db.query(sql,[title,description,image],(err,result)=>{
            if(err){
                console.error('Error adding department:', err.stack);
            res.status(500).send('Error adding department');
            return;
            }
            res.redirect('/dashboard');            
        });
    });
    // ADD NEW PATIENT 
    app.post('/addNewPatient',(req,res)=>{
        const sql = 'insert into patients(names,email,phone,doctor,department,recommendations,appointment,payment,current_status) values (?,?,?,?,?,?,?,?,?)';
        db.query(sql,[names,email,phone,doctor,department,recommendations,appointment,payment,current_status])
    })
// ACTIONS
    // Delete
    app.get('/delete/:id',(req,res)=>{
    const {id} = req.params;
    const homeSql = 'delete from home where id=?';
    const aboutSql = 'delete from about where id=?';
    const homeserviceSql = 'delete from homeservice where id=?';
    const homecontentSql = 'delete from homecontent where id=?';
    const aboutcontentSql = 'delete from aboutcontent where id=?';
    const servicecontentSql = 'delete from servicecontent where id=?';
    const appointmentSql = 'delete from appointments where id=?';
    const departmentsSql = 'delete from departments where id=?';
    const teamSql = 'delete from team where id=?';
    db.query(homeSql,[id],(err, homeResult) =>{
        if(err) throw err
        db.query(aboutSql,[id],(err,aboutResult)=>{
            if(err) throw err
            db.query(homeserviceSql,[id],(err,homeserviceResult) =>{
            if(err) throw err
            db.query(homecontentSql,[id],(err,homecontentResult)=>{
                if(err) throw err
                db.query(aboutcontentSql,[id],(err,aboutcontentResult)=>{
                    if(err) throw err
                    db.query(servicecontentSql,[id],(err,servicecontentResult)=>{
                        if(err) throw err
                        db.query(appointmentSql,[id],(err,appointmentResult)=>{
                            if(err) throw err
                            db.query(departmentsSql,[id],(err,departmentsResult)=>{
                                if(err) throw err
                                db.query(teamSql,[id],(err,teamResult)=>{
                                    if(err) throw err
                                    res.redirect('/dashboard');
                                });
                            });
                        });
                    });
                });
            });
        });
        });
        
    });
});
    // edit/:id
    app.get('/edit/:id',(req,res)=>{
        const{id}=req.params;
        const homeSql = 'select * from home where id=?';
        const aboutSql = 'select * from about where id=?';
        const homeserviceSql = 'select * from homeservice where id=?';
        const homecontentSql = 'select * from homecontent where id=?';
        const aboutcontentSql = 'select * from aboutcontent where id=?';
        const servicecontentSql = 'select * from servicecontent where id=?';
        const appointmentSql = 'select * from appointments where id=?';
        const departmentsSql = 'select * from departments where id=?';
        const teamSql = 'select * from team where id=?';
        db.query(homeSql,[id],(err, homeResult) =>{
            if(err) throw err
            db.query(aboutSql, [id],(err,aboutResult)=>{
                if(err) throw err
                db.query(homeserviceSql,[id],(err,homeserviceResult) =>{
                if(err) throw err
                db.query(homecontentSql,[id],(err,homecontentResult)=>{
                    if(err) throw err
                    db.query(aboutcontentSql,[id],(err,aboutcontentResult)=>{
                        if(err) throw err
                        db.query(servicecontentSql,[id],(err,servicecontentResult)=>{
                            if(err) throw err
                            db.query(appointmentSql,[id],(err,appointmentResult)=>{
                                if(err) throw err
                                db.query(departmentsSql,[id],(err,departmentsResult)=>{
                                    if(err) throw err
                                    db.query(teamSql,[id],(err,teamResult)=>{
                                        if(err) throw err
                                        res.render('edit',{about:aboutResult[0],home:homeResult[0],homeservice:homeserviceResult[0],homecontent:homecontentResult[0],
                                                            aboutcontent:aboutcontentResult[0],servicecontent:servicecontentResult[0],appointment:appointmentResult[0],
                                                            departments:departmentsResult[0],team:teamResult[0]});
                                    });
                                });
                            });
                        });
                    });
                });
            });
            });
            
        });
    })

    app.post('/homeupdate/:id',(req,res)=>{
        const{id} = req.params;
        const{title,description} = req.body;
        const sql = 'update home set title=?,description=? where id=?';
        db.query(sql,[title,description,id],(err,result)=>{
            if(err) throw err
            res.redirect('/dashboard');
        });
    });



app.listen(port, () => {
    console.log('Listening on port ' + port);
});
