const express = require('express');
const productRouter = require('./Routers/Product.router');
const userRouter = require('./Routers/User.router');
const connection = require('./config/DB');
const cors = require('cors');
let app = express();
const swaggerUi = require('swagger-ui-express');


connection();
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
// app.use(
//     "/api-documentation",
//     swaggerUi.serve,
//     swaggerUi.setup(null, {
//       swaggerOptions: {
//         url: "http://localhost:3030/api-docs",
//       },
//     })
//   );
  
//   module.exports = app;

app.listen(8000)

