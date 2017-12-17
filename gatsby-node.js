/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path');
 const slash = require(`slash`);


 exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {
     const Excuse = path.resolve(`src/components/excuse.js`)
     // Query for markdown nodes to use in creating pages.
     resolve(
       graphql(
         `
         {
           allExcusesJson {
             edges {
               node {
                 path
                 text
                 description
                 icon
               }
             }
           }
         }
        `
       ).then(result => {
         console.log(result.data.allExcusesJson.edges)
         if (result.errors) {
           reject(result.errors)
         }

         // Create blog post pages.
         result.data.allExcusesJson.edges.forEach(edge => {
             const {path, text, description, icon} = edge.node;

             createPage({
               path,
               component: Excuse,
               context: {
                 text,
                 description,
                 icon,
               },
             })
         })

         return
       })
     )
   })
 }
