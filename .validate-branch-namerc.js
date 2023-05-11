// See https://www.npmjs.com/package/validate-branch-name
module.exports = {
  pattern:
    '^(master|main|develop|stage){1}$|^(issue|Issue)-[0-9]+.+$|^\\d.\\d.x$|^\\d.x$',
  errorMsg:
    'Please use the following branch naming convention: issue-<ISSUE-ID>-some-title, issue-3349080-some-title, Issue-3349080-some-new-title issue-3349080-timestampdatetime-widget-not-null',
};
