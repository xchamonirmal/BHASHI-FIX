const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~wClH3QZJ#oowPKDHwC654oV6Tsvf9APjjRBlD3IR8Yrh-AKoNgbY",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://herokubot458:QAT5sKzU9JnlXJAS@cluster0.u0w6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

    
 
};
