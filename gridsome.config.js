module.exports = {
	siteName: 'Gridsome Starter NetlifyCMS',
	siteUrl: 'https://www.gridsome.org',
	siteDescription: 'Gridsome is a blazing-fast static site generator...',
	titleTemplate: `%s - Gridsome`,
	
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'src/data/blog/*.md',
				typeName: 'BlogPost',
				route: '/blog/:slug'
			}
		},
		{
		  use: `gridsome-plugin-netlify-cms`,
		  options: {
			publicPath: `/admin`
		  }
		},
	]
}
