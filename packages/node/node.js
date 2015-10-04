let Node = class extends SD.Structure.Entity {
  constructor({ name, schema = {}, indexes = {} }) {
    super({
      type: 'node',
      bundle: name,
      schema: _.extend({
        nid: {
          type: Number,
          optional: true,
          autoValue: () => {
            return this.collection.find().count() + 1;
          }
        },
        bundle: {
          type: String,
          optional: true,
          autoValue: function() {
            return name;
          }
        },
        title: {
          type: String
        }
      }, schema)
    });

    // Ensure index for entity type node.
    Node._ensureIndex('nid', {unique: 1});
  }
}

// Export Node to packages and application.
SD.Structure.Node = Node;
