const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");

require("dotenv").config({ path: ".env" });

// ******************MONGOOSE BASE DE DATOS**********************************
mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useandFind & useIndex are not longer necessary
  },
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      server();
    }
  }
);
// ******************MONGOOSE BASE DE DATOS**********************************

// *********SERVIDOR ******************+
function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });
  serverApollo.listen().then((response) => {
    console.log("Servidor READY");
    console.log(response.url);
  });
}
// *********SERVIDOR ******************+
