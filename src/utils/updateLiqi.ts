import fs from 'fs';
// dotenv
import 'dotenv/config';

const getLatestVersion = async () => {
  try {
    const res = await fetch(String(process.env.GAME_URL) + 'version.json');
    const json = await res.json();
    return json.version;
  } catch (e) {
    console.log('getLatestVersion error', e);
  }
};

const getLiqiVersion = async (version: string) => {
  try {
    const res = await fetch(String(process.env.GAME_URL) + `resversion${version}.json`);
    const json = await res.json();
    return json.res['res/proto/liqi.json']['prefix'];
  } catch (e) {
    console.log('getLiqiVersion error', e);
  }
};

const updateLiqi = async () => {
  // get latest version
  const version = await getLatestVersion();
  console.log('version:', version);

  // get liqi version
  const liqiVersion = await getLiqiVersion(version);
  console.log('liqiVersion:', liqiVersion);

  // update from remote
  try {
    const res = await fetch(String(process.env.GAME_URL) + `${liqiVersion}/res/proto/liqi.json`);
    // save json file to local using fs
    const json = await res.json();
    // if not exist, create one
    if (!fs.existsSync('./src/assets')) {
      fs.mkdirSync('./src/assets');
    }
    fs.writeFileSync('./src/assets/liqi.json', JSON.stringify(json));
    console.log('update Liqi success!');
  } catch (e) {
    console.log('update Liqi error', e);
  }
};

updateLiqi();
