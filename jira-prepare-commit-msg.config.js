// .jira-prepare-commit-msgrc .js

// See https://www.npmjs.com/package/jira-prepare-commit-msg
module.exports = {
  messagePattern: '[$J] $M',
  jiraTicketPattern: '([A-Z]+-\\d+)',
  commentChar: '#',
  isConventionalCommit: false,
  allowEmptyCommitMessage: false,
};
