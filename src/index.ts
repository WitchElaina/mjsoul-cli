import MJSoul from 'mjsoul';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

const mjsoul: MJSoul = new MJSoul({
  url: process.env.LOBBY_URL,
});

const login = async () => {};
