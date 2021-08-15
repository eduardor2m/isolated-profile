import fs from 'fs';
import { Request, Response } from 'express';
import { User } from '../models/User';

export const UserController = {

  create(req: Request, res: Response) {
    const data = req.body;
    fs.writeFileSync(`./users/${data.email}.json`, JSON.stringify(data));
    res.send(data);
  },

  findAll(req: Request, res: Response) {
    try {
      const data = fs.readdirSync('./users');
      const json = [];
      for (const file of data) {
        const arquivo = fs.readFileSync(`./users/${file}`);
        const arquivoFormated = Buffer.from(arquivo).toString();
        json.push(JSON.parse(arquivoFormated));
      }
      res.send(json);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  findOne(req: Request, res: Response) {
    try {
      const data = fs.readFileSync(`./users/${req.params.email}.json`);
      res.send(data);
    } catch (error) {
      res.status(400).send('Email Inváliddo');
    }
  },

  async stealth(req: Request, res: Response) {
    try {
      const data = fs.readFileSync(`./users/${req.params.email}.json`);
      const formatter = Buffer.from(data).toString();
      const user = new User(JSON.parse(formatter));
      await user.start();
      res.send(user);
    } catch (error) {
      res.status(400).send('Email Inváliddo');
    }
  },

};
