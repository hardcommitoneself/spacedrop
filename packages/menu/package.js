Package.describe({
  name: 'spacedrop:menu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use(['spacedrop:core@0.0.1']);

  const shared = [
    'meteorhacks:fast-render@2.10.0',
    'meteorhacks:subs-manager',
    'kadira:flow-router-ssr@3.3.0',
    'kadira:react-layout@1.3.1',

    'reactive-dict',
    'timbrandin:react-templates'
  ];
  api.use(shared);
  api.imply(shared);

  // Templates.
  api.addFiles('templates/page.html.jsx');

  // Components
  api.addFiles('components/page.jsx');

  // Routing logic and subscription management.
  api.addFiles('subscription-cache.js');
  api.addFiles('menu.js');

  // Help keep track of page scroll during history navigation.
  api.addFiles('scroll-tracking.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('menu');
  api.addFiles('menu-tests.js');
});
