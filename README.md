# GraphQL Demo
Provides a working example of a basic graphQL implementation for giving demos. The repo is based on apollo-server.

## What is GraphQL?
GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data. - [GraphQL.org](https://graphql.org/learn/)

## Why use GraphQL?
Here are some reasons that I value when thinking about GraphQL. There are plenty more out in the wild.

### Smaller payloads
When querying a RESTful API, you always get the full set of data that the endpoint returns. When you don't need that full set of data, this is called over-fetching.

When you use GraphQL, you define in your request the exact pieces of data that you need, and you dont get back anything more. This allows for better performance in an app as there is less data, fewer bytes being transmitted and less data to process.

### More useful payloads
Contrary to over-fetching, under-fetching is when an endpoint doesn't provide _enough_ data, and hence means more requests are needed in order to complete the tasks. By stating all the specific information that is needed in a single request, under-fetching can also be eliminated.

### Strictly-typed interfaces
GraphQL operates by defining a schema that represents the data being operated on. This schema allows users of the service to know exactly what types of data are available at all times, and provides typing for queries simultaneously.


### Self-documenting
Using a standard REST API to fetch data about a board games, for example, might give you an endpoint such as `api/v1/games` which would return an array objects representing each available game. If the user wanted to filter this in a RESTful way they could use a query parameter such as `api/v1/games?minPlayers=2`. While this would be a valid solution, it can quickly get out of hand as more and more query parameters are added. In order for the API to be user friendly each valid parameter in each version of the API would have to be explicitly documented with a tool like Swagger. Maintining this documentation on a large API with multiple versions can then become time consuming, and hence expensive. With GraphQL schemas, this information would be readily available.
