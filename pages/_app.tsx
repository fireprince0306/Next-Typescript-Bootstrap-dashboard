import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';

import PageHeader from '~/components/common/page-header';
import Sidebar from '~/components/common/sidebar';

require('typeface-open-sans');
import '~/styles/globals.css';
import '~/styles/custom.scss';
import '~/styles/page.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
	const [collapsed, setCollapsed] = useState(false);
	const [toggled, setToggled] = useState(false);

	const handleToggleSidebar = () => {
		setToggled(!toggled);
	};

	const handleCollapsedChange = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
				/>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
			</Head>

			<div className="page-wrapper scrollable-container">
				<PageHeader
					handleCollapsedChange={handleCollapsedChange}
					handleToggleSidebar={handleToggleSidebar}
				/>

				<div className="layout-container d-flex h-100">
					<Sidebar
						collapsed={collapsed}
						toggled={toggled}
						handleToggleSidebar={handleToggleSidebar}
					/>

					<div className="mt-5 pt-2 flex-grow-1">
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</>
	);
}