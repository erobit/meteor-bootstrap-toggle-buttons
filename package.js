Package.describe({
  summary: "Bootstrap toggle buttons - unofficial - nostalgiaz / bootstrap-toggle-buttons"
});

Package.on_use(function (api) {
  api.use(['jquery', 'bootstrap'], 'client');
  api.add_files(['bootstrap-toggle-buttons.css','jquery.toggle.buttons.js'], 'client');
});