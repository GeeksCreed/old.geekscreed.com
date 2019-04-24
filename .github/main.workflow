workflow "Gatsby Build and deploy to GitHub Pages on push " {
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
