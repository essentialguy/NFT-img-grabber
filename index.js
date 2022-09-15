const fs = require("fs");
require('dotenv').config();
const axios = require('axios').default;
const args = process.argv.slice(2);
const dir = `${__dirname}`;
const imgPath = `${dir}/images`;
const startIndex = args[0];
const endIndex = args[1];
const CID = process.env.CID;

const getimg = () => {
    fs.readdir(imgPath, (err) => {
        if (err) {
        fs.mkdirSync(`${dir}/images`, { recursive: true});
        console.log('Creating Path to Store Images...');
      }
      });
    console.log(`%cFetching ${endIndex - startIndex + 1} image from ${CID}`, `color: red`);
    //fs.rmSync(imgPath, { recursive: true, force: true });
    //fs.mkdirSync(`${dir}/images`, { recursive: true});
    for(let i = startIndex; i <= endIndex; i++) {
    axios.get(`https://sweetsea.mypinata.cloud/ipfs/${CID}/${i}.png`, {
      responseType: 'arraybuffer'
    })
  .then(function (response) {
    fs.writeFileSync(`${imgPath}/${i}.png`, response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}
};



if (endIndex === "10000") {
  console.log("You cant pass 10000 as endindex, MAX 9999")
} else {
  getimg();
}
