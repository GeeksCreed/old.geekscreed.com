workflow "Gatsby to GitHub Pages" {
  on = "push"
  resolves = ["Publish"]
}

action "On Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  uses = "enriikke/gatsby-gh-pages-action@master"
  needs = ["On Master"]
  secrets = ["ACCESS_TOKEN"]
}
