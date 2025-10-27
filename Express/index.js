import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const app = express();
const port = 3000;
const myMiddleware = (req, res, next) => {
    console.log('Middleware executed');
    req.locals = {"addedInfo": {"travel": "Georgia"}};
    next()
}
const authenticateTokenMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.username !== 'madi') {
        return res.status(401).json({'error': 'Invalid User'});
      }
      next();
    } catch (err) {
      return res.status(403).json({'error': err || 'Invalid Token'});
    }
};

app.set('view engine', 'pug');
app.set('views', './templates');

app.use(cookieParser());

app.get('/status', (req, res) => {
  res.json({ status: 'Active' });
});

app.get('/generate-token', (req, res) => {
  const username = "madi";
  const token = jwt.sign({ 'username': username }, process.env.JWT_SECRET, { expiresIn: '1m' });
  res.json(token);
});

app.get('/ip', myMiddleware, (req, res) => {
  res.cookie('username', 'madi', {domain: 'localhost', path: '/'});
  res.cookie('addedInfo', req.locals.addedInfo, {domain: 'localhost', path: '/'});
  res.send(`Client IP is ${req.ip}`);
});

app.get('/get/{:id}', (req, res) => {
  const id = req.params.id;
  res.send(`ID received: ${id}`);
});

app.get('/name', (req, res) => {
  res.render('name', { name: 'Madi Si xxx' });
});

app.get('/', authenticateTokenMiddleware, (req, res) => {
    res.send(req.cookies);
});

app.listen(port, () => {
  console.log(`Server is ready`);
});