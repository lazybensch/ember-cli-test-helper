module.exports = {
  name: 'ember-cli-test-helper',
  description: 'Sets up test framework.',

  normalizeEntityName: function(entityName) {
    return entityName || 'ember-qunit';
  },

  locals: function(options) {
    var entity   = options.entity;
    var framework = entity.name;

    return {
      framework: framework
    };
  }

};
