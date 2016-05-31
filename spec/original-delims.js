global.handlebarsEnv = null;

beforeEach(function() {
  global.handlebarsEnv = Handlebars.create();
});

describe('original delims', function() {
  it('should be ignored', function() {
    shouldCompileTo('{{foo}}', {foo: 'bar'}, '{{foo}}');
  });

  describe('when mixed with new delims', function() {
    it('should be ignored', function() {
      shouldCompileTo('<{{foo}}>{{foo}}', {foo: 'bar'}, 'bar{{foo}}');
      shouldCompileTo('{{foo}}<{{foo}}>', {foo: 'bar'}, '{{foo}}bar');
      shouldCompileTo('<{{foo}}>{{foo}}<{{foo}}>', {foo: 'bar'},
        'bar{{foo}}bar');
      shouldCompileTo('{{foo}}<{{foo}}>{{foo}}', {foo: 'bar'},
        '{{foo}}bar{{foo}}');
    });
  });
});
