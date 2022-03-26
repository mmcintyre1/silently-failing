# Silently Failing Blog
Might be my 63rd attempt at starting a "blog". The attempt with this one is to reduce the friction in writing. I can borrow someone else's work and just get to the act of writing, which is what I need to do more of.

## Deploying Locally and Netlfying-ly
All actions are handled through the `Makefile`, so you can run `make build` and then `make server` in order to build and run a jekyll server locally. This runs a docker-compose command. One other thing of note is I also have a `config_dev.yml` in order to set a url variable for local builds. A docker container running in WSL seems to publish the site to 0.0.0.0:4000, so this is a convenience method to set that to localhost instead.

I'm currently using Netlify to deploy, so we can use `make deploy` for that command.

## Domain Registration
silentlyfailing is currently registered with AWS, so I have a CNAME and A record set up in Route53 to handle the redirects to netlify servers. Netlify uses Let's Encrypt to handle the SSL/TLS cert.

## TODO
Write!
