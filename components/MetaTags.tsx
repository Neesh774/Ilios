
import Head from 'next/head';

export default function MetaTags({
	title = 'Ilios',
	description = 'Neesh\'s Personal Website',
	image = '/favicon.svg',
	favicon = '/favicon.ico',
	color = '#0B172A',
}) {
	return (
		<Head>
			<title>{title}</title>

			<meta name='description' content={description} />
			<link rel='icon' type='image/favicon.png' href={image} />
			<meta name='image' content={image} />
			<meta name='theme-color' content={color} />

            <meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='@neesh774' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />

			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
		</Head>
	);
}