const { projects, clients } = require("../sampleData.js");

//mongoose model
const Project = require("../models/Project.js");
const Client = require("../models/Client.js");


const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

//project type
const projectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      status: { type: GraphQLString },
      client: {
        type: clientType,
        resolve(parent, args) {
          return Client.findById(parent.clientId);
        }
      }
    }),
  });

//client type
const clientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    
  }),
});


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
  projects: {
        type: new GraphQLList(projectType),
        resolve(parent, args) {
          Project.find();
        },
      },
    project: {
        type: projectType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Project.findById(args.id);
        },
    },
    clients: {
      type: new GraphQLList(clientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: clientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});
//export it
module.exports = new GraphQLSchema({
  query: RootQuery,
});
