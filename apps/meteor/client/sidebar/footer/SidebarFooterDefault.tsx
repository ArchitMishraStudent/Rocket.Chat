import { css } from '@rocket.chat/css-in-js';
import { Box, SidebarDivider, Palette, SidebarFooter as Footer } from '@rocket.chat/fuselage';
import { useThemeMode } from '@rocket.chat/ui-theming';
import type { ReactElement } from 'react';

import { SidebarFooterWatermark } from './SidebarFooterWatermark';

const SidebarFooterDefault = (): ReactElement => {
	const [, , theme] = useThemeMode();

	const sidebarFooterStyle = css`
		& img {
			max-width: 100%;
			height: 100%;
		}

		& a:any-link {
			color: ${Palette.text['font-info']};
		}
	`;

	return (
		<Footer>
			<SidebarDivider />
			<Box
				is='footer'
				pb={12}
				pi={16}
				height='x48'
				width='auto'
				className={sidebarFooterStyle}
			>
				<img src="./homer.png" alt="HOMER????" />
			</Box>
			<SidebarFooterWatermark />
		</Footer>
	);
};

export default SidebarFooterDefault;
