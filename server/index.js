const express = require('express');
const next = require('next');
var admin = require('firebase-admin');
const introductionData = require('./introduction.json');

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

// Firebase Admin SDK
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dog-blog-29d8f-default-rtdb.firebaseio.com'
});

app.prepare().then(() => {
  const server = express();

  // 알람 기능
  server.post('/notice', (req, res) => {
    const registrationToken =
      'eeFbHEFEcs2Z4TOX52Dm8a:APA91bF5aAhtpxG-BLftia4aK23Lpyl4I3Px5E8xydavmLTKnrodkkIs3rSpZtqZUawT5nFAPFa1II4DBrwUGkd0e9fWJK1YgHqt4F9sOe26qyQOh4iZDQ0wWGjDog59nxAnd4aNpBk2';

    const messages = [
      {
        notification: {
          title: '업로드 완료',
          body: '파일 업로드가 완료되었습니다.'
        },
        token: registrationToken
      }
    ];

    admin
      .messaging()
      .sendAll(messages)
      .then((res) => {
        console.log(res.successCount + ' messages were sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  });

  // 서비스 소개화면 데이터
  server.get('/introduction', (req, res) => {
    return res.json(introductionData);
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`listening to ${port}`);
  });
});
