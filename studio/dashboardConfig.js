export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc54e9f62856934ccb8bd4e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4ygr925g',
                  apiId: 'e6867db1-8094-4efc-803d-8b33628e42a5'
                },
                {
                  buildHookId: '5fc54e9fa66a8e00b3779598',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7t5d6z4a',
                  apiId: 'd35c4bfb-cdad-45e4-8392-b44a7633f2d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zerostyle/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7t5d6z4a.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
