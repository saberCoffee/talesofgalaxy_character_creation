const project = 'character_creation';

const configs = {
  character_creation: {
    name: project,
    title: project,
    path: ['E:', 'www', 'perso', 'TalesOfGalaxyProject', 'talesofgalaxy', 'web', 'modules', project],
    publicPath: './modules/character_creation/',
    entry: [
      './src/entries/character_creation/index.js'
    ],
    txtName: '',
    template: './src/entries/character_creation/index.ejs',
    cssVendors: [],
    jsVendors: []
  },
};

export default function () {
  if (configs && configs[project]) {
    return configs[project];
  }

  console.log(`No config under the project "${project}"`);
  return undefined;
}
