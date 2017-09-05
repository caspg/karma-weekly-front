# karma-weekly-front

Client side application, built with [next.js](https://github.com/zeit/next.js) framework. Hosted as static website.

## Links

* live website: [KarmaWeekly.club](https://karmaweekly.club)
* backend repo: [karma-weekly-backend](https://github.com/caspg/karma-weekly-backend)

## Tech stack

* [react.js](https://github.com/facebook/react)
* [next.js](https://github.com/zeit/next.js)
* [react-apollo](https://github.com/apollographql/react-apollo)

## Setting up

* Set ENV variables

  During local development run:

  ```bash
  $ cp .env.example .env
  ```

## Running in development

You should set correct `GRAPHQL_URI` variable. Then run:

```bash
yarn dev
```

Alternatively, you can mock grapql responses with:

```bash
$ MOCK_APOLLO=true yarn dev
```

## Deployment to s3

Deployment is handled by [serverless.com](https://serverless.com/) framework with [serverless-client-s3](https://github.com/serverless/serverless-client-s3) plugin.

Make sure that `serverless` framework is installed.

Before deployment next.js builds project and outputs result to `client/dist/` directory (this specific directory is required by `serverless-client-s3` plugin).

Run command:

```bash
GRAPHQL_URI=something yarn run deploy:dev

# or
GRAPHQL_URI=something yarn run deploy:prod
```

## License

The project is available as open source under the terms of the MIT License.
