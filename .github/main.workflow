workflow "Gatsby Build and deploy on push to GitHub Pages" {
  resolves = ["Publish"]
  on = "push"
}

action "On Master Branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  uses = "enriikke/gatsby-gh-pages-action@master"
  secrets = ["ACCESS_TOKEN"]
  needs = ["On Master Branch"]
}
