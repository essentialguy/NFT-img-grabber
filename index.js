const fs = require("fs");
const axios = require('axios').default;
const args = process.argv.slice(2);
const dir = `${__dirname}`;
const imgPath = `${dir}/images`;
const startIndex = args[0];
const endIndex = args[1];
const CID = args[2];

const getimg = () => {
    fs.readdir(imgPath, (err) => {
        if (err) {
        fs.mkdirSync(`${dir}/images`, { recursive: true});
        console.log('Creating Path to Store Images...');
      }
      });
    console.log(`%cFetching ${endIndex} image from ${CID}`, `color: red`);
    fs.rmSync(imgPath, { recursive: true, force: true });
    fs.mkdirSync(`${dir}/images`, { recursive: true});
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



getimg();