function pQuery() {
  const soqlParser = window.SOQLParserJS;
  const soqlQuery = $('#soqlQuery');

  const treeResult = soqlParser.parseQuery(soqlQuery.val());

  $('#parserTree').val(JSON.stringify(treeResult, null, 2));
}