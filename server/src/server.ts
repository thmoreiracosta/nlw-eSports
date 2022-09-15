import express from 'express';


const app = express();

app.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },    
    { id: 4, name: 'Anúncio 4' },    
  ])
});

app.listen(3000, () => {  
  console.log('Server started on port 3000');
});

