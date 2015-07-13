# SlackDomainCheck

A Web Developer's best friend, now in Slack. Look for domain name availability right from Slack without going anywhere.

![](http://i.imgur.com/yRINtnI.gif)



## Usage

From any Slack channel, just type `/domain [example.com]`. The result will be shown on the same channel visible just to you.


## Integrate with your team

1. Go to your channel
2. Click on **Configure Integrations**.
3. Scroll all the way down to **DIY Integrations & Customizations section**.
4. Click on **Add** next to **Slash Commands**.
  - Command: `/domain`
  - URL: `https://tranquil-tundra-8028.herokuapp.com/`
  - Method: `POST`
  - For the **Autocomplete help text**, check to show the command in autocomplete list.
    - Description: `Show the domain name availability.`
    - Usage hint: `[example.com]`
  - Descriptive Label: `Domain name check`


## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


## Contributing

- Please use the [issue tracker](https://github.com/SwarShah/SlackDomainCheck/issues) to report any bugs or file feature requests.