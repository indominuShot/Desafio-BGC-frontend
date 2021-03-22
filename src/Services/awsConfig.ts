const awsConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_UnKCvX1yy',
    identityPoolId: 'us-east-1:8dd44acb-f2fb-4fd7-b7c7-92dac49bb9ab',
    userPoolWebClientId: '5f26tbd1vg8p7es4qqsi6k28qs',
  },
  Storage: {
    region: 'sa-east-1',
    bucket: 'bgc-minions',
    identityPoolId: 'us-east-1:8dd44acb-f2fb-4fd7-b7c7-92dac49bb9ab',
  },
  API: {
    endpoints: [
      {
        name: 'serverless',
        endpoint: 'https://v5akl8kck7.execute-api.sa-east-1.amazonaws.com/dev',
        region: 'sa-east-1',
      },
    ],
  },
};

export default awsConfig;
