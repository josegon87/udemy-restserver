
//puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de datos
let urlDB;

if ( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

//Google clien id
process.env.CLIENT_ID = process.env.CLIENT_ID || '76986315933-69ha94p65jc9jrdosr0kpo32m0og7i42.apps.googleusercontent.com';

//vencimiento token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//seed de autenticacion
process.env.SEED = process.env.SEED  || 'este-es-el-seed-desarrollo';

process.env.URLDB = urlDB;